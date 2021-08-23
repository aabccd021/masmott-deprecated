import { Dict, Option } from 'kira-pure';

import { Spec } from './mod.g';

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
export type ColSpec = Dict<Spec.Union>;

/**
 *
 */
export type AppSpec = Dict<ColSpec>;
