import { ColReferFields, Doc } from './mod';

export type ColRefer = {
  readonly colName: string;
  readonly fields: ColReferFields;
  readonly thisColRefers: readonly ColRefer[];
};

export type ImageFieldValue = {
  readonly url: string;
};

export type DocKey = {
  readonly col: string;
  readonly id: string;
};

export type DocSnapshot = {
  readonly doc: Doc;
  readonly id: string;
};
