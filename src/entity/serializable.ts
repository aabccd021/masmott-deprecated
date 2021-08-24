import { Dict, Option } from 'kira-pure';

import { Field, Spec } from './mod';

export type SyncedFields = Dict<Option<SyncedFields>>;

export type ColReferFields = Dict<SyncedFields>;

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

export type Doc = Dict<Field.Type>;

export type DocSnapshot = {
  readonly doc: Doc;
  readonly id: string;
};

export type ColSpec = Dict<Spec.Type>;

export type AppSpec = Dict<ColSpec>;
