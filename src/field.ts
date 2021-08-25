import type { DocSnapshot } from '../../../read-data-value';
import type { ImageFieldValue } from '../../util';
import type * as Spec from '../spec/union';

export type Count = {
  readonly _type: 'Count';
  readonly data: bigint;
  readonly spec: Spec.Count;
};

export type CreationTime = {
  readonly _type: 'CreationTime';
  readonly data: Date;
  readonly spec: Spec.CreationTime;
};

export type Image = {
  readonly _type: 'Image';
  readonly data: ImageFieldValue;
  readonly spec: Spec.Image;
};

export type Owner = {
  readonly _type: 'Owner';
  readonly data: DocSnapshot;
  readonly spec: Spec.Owner;
};

export type Ref = {
  readonly _type: 'Ref';
  readonly data: DocSnapshot;
  readonly spec: Spec.Ref;
};

export type String = {
  readonly _type: 'String';
  readonly data: string;
  readonly spec: Spec.String;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Base = Count | CreationTime | Image | Owner | Ref | String;
