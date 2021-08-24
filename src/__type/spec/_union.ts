/* eslint-disable @typescript-eslint/ban-types */
import { ColRefer } from '../_type';
import { SyncedFields } from '../alias';

export type Count = {
  readonly countedCol: string;
  readonly groupByRef: string;
};

export type CreationTime = {};

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

export type String = {
  readonly _type: 'String';
};
