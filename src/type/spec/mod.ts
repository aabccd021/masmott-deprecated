import { ColRefer, SyncedFields } from '../../util';

export type Count = {
  readonly _type: 'Count';
  readonly countedCol: string;
  readonly groupByRef: string;
};

export type CreationTime = {
  readonly _type: 'CreationTime';
};

export type Image = {
  readonly _type: 'Image';
};

export type Owner = {
  readonly _type: 'Owner';
  readonly ownerCol: string;
  readonly syncedFields: SyncedFields;
  readonly thisColRefers: readonly ColRefer[];
};

export type Ref = {
  readonly _type: 'Ref';
  readonly refedCol: string;
  readonly syncedFields: SyncedFields;
  readonly thisColRefers: readonly ColRefer[];
};

export type String = {
  readonly _type: 'String';
};

export type Base = Count | CreationTime | Image | Owner | Ref | string;
