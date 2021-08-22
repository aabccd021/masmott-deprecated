import {
  Either,
  eitherArrayReduce,
  eitherMapRight,
  Left,
  None,
  Option,
  optionFold,
  optionFromNullable,
  Right,
  Some,
} from 'trimop';

import { Doc, Field, RefField } from './type/data';
import { SyncedFields } from './type/sum/spec/union';

// TODO: use option

/**
 * FilterSyncedFieldInvalidFieldTypeError
 */
export type FilterSyncedFieldsError = {
  readonly field: Field;
};

export function FilterSyncedFieldsError(field: Field): FilterSyncedFieldsError {
  return {
    field,
  };
}

/**
 * Filter synced fields.
 * @param doc to be filtered
 * @param syncedFields
 * @returns synced fields if exists, undefined otherwise.
 */
export function filterSyncedFields({
  doc,
  syncedFields,
}: {
  readonly doc: Doc;
  readonly syncedFields: SyncedFields;
}): Either<FilterSyncedFieldsError, Option<Doc>> {
  return eitherArrayReduce<
    Option<Doc>,
    FilterSyncedFieldsError,
    readonly [string, true | SyncedFields]
  >(Object.entries(syncedFields), Right(None()), (acc, [fieldName, syncFieldSpec]) => {
    return optionFold<Either<FilterSyncedFieldsError, Option<Doc>>, Field>(
      optionFromNullable<Field>(doc[fieldName]),
      () => Right(acc),
      (field) => {
        // Copy the field if defined in the spec
        if (syncFieldSpec === true) {
          const fieldEntry = { [fieldName]: field };
          return Right(
            Some(
              optionFold(
                acc,
                () => fieldEntry,
                (acc) => ({ ...acc, ...fieldEntry })
              )
            )
          );
        }

        if (field._type !== 'Ref') {
          return Left(FilterSyncedFieldsError(field));
        }
        // Copy nested synced fields
        return eitherMapRight(
          filterSyncedFields({
            doc: field.snapshot.doc,
            syncedFields: syncFieldSpec,
          }),
          (syncedDoc) =>
            Right(
              optionFold(
                syncedDoc,
                // If there was no copied field
                () => acc,
                (syncedDoc) =>
                  optionFold(
                    acc,
                    () =>
                      Some({
                        [fieldName]: RefField({
                          doc: syncedDoc,
                          id: field.snapshot.id,
                        }),
                      }),
                    (acc) =>
                      Some({
                        ...acc,
                        [fieldName]: RefField({
                          doc: syncedDoc,
                          id: field.snapshot.id,
                        }),
                      })
                  )
              )
            )
        );
      }
    );
  });
}
