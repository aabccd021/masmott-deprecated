import { Dict, Option } from 'kira-pure';

import { Field, Spec } from './mod';

/**
 *
 */
export type SyncedFields = Dict<Option<SyncedFields>>;

/**
 *
 */
export type ColReferFields = Dict<SyncedFields>;

/**
 *
 */
export type ColSpec = Dict<Spec.Type>;

/**
 *
 */
export type AppSpec = Dict<ColSpec>;

/**
 *
 */
export type Doc = Dict<Field.Type>;
