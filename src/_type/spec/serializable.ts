import { ColRefer, SyncedFields } from '../mod';

export type Count = {
  readonly countedCol: string;
  readonly groupByRef: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type CreationTime = {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Image = {};

export type Owner = {
  readonly ownerCol: string;
  readonly syncedFields: SyncedFields;
  readonly thisColRefers: readonly ColRefer[];
};

export type Ref = {
  readonly refedCol: string;
  readonly syncedFields: SyncedFields;
  readonly thisColRefers: readonly ColRefer[];
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type String = {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Type = {};
