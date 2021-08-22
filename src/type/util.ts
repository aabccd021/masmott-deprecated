import { Dict } from 'kira-pure';

import * as Spec from './sum/spec/union';

/**
 *
 */
export type SyncedFields = Dict<SyncedFields | true>;

/**
 *
 */
export type ColRefer = {
  readonly colName: string;
  readonly fields: readonly {
    readonly name: string;
    readonly syncedFields: SyncedFields;
  }[];
  readonly thisColRefers: readonly ColRefer[];
};

/**
 *
 */
export type ColSpec = Dict<Spec.Base>;

/**
 *
 */
export type AppSpec = Dict<ColSpec>;

/**
 *
 */
export type ImageFieldValue = { readonly url: string };
