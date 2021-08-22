import { Left, Right, Some } from 'trimop';

import { Doc, NumberField, RefField, stringField, SyncedFields } from '../src';
import { filterSyncedFields, FilterSyncedFieldsError } from '../src/filter-synced-fields';

describe('filterSyncedFields', () => {
  it('can filter properly', () => {
    const doc: Doc = {
      joinedYear: NumberField(2020),
      mentor: RefField({
        doc: {
          name: stringField('Akane Moriya'),
          origin: RefField({
            doc: {
              food: stringField('Kakigori'),
              region: stringField('East Japan'),
            },
            id: 'miyagi',
          }),
          position: stringField('Sergeant'),
        },
        id: 'akanen',
      }),
      name: stringField('Masumoto Kira'),
      oshi: RefField({
        doc: {
          name: stringField('Yuuka Sugai'),
        },
        id: 'yukka',
      }),
    };
    const syncedFields: SyncedFields = {
      hobby: true,
      joinedYear: true,
      mentor: {
        origin: {
          region: true,
        },
        position: true,
      },
      oshi: {
        respectLevel: true,
      },
    };
    expect(filterSyncedFields({ doc, syncedFields })).toStrictEqual(
      Right(
        Some({
          joinedYear: NumberField(2020),
          mentor: RefField({
            doc: {
              origin: RefField({
                doc: {
                  region: stringField('East Japan'),
                },
                id: 'miyagi',
              }),
              position: stringField('Sergeant'),
            },
            id: 'akanen',
          }),
        })
      )
    );
  });

  it('returns filterSyncedFieldsError if given other than refField on nested sync', () => {
    const doc: Doc = {
      mentor: stringField('Akane Moriya'),
    };
    const syncedFields: SyncedFields = {
      mentor: {
        name: true,
      },
    };
    expect(filterSyncedFields({ doc, syncedFields })).toStrictEqual(
      Left(FilterSyncedFieldsError(stringField('Akane Moriya')))
    );
  });
});
