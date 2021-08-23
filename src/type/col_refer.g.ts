import { ColReferFields } from './alias';

export type Type = {
  readonly colName: string;
  readonly fields: ColReferFields;
  readonly thisColRefers: readonly Type[];
};
