import { DocSnapshot } from '../../read-data-value';
import * as Spec from '../spec/union';
import { ImageFieldValue } from '../util';

export type Count = {
  readonly data: bigint;
  readonly spec: Spec.Count;
};

export type CreationTime = {
  readonly data: Date;
  readonly spec: Spec.CreationTime;
};

export type Image = {
  readonly data: ImageFieldValue;
  readonly spec: Spec.Image;
};

export type Owner = {
  readonly data: DocSnapshot;
  readonly spec: Spec.Owner;
};

export type Ref = {
  readonly data: DocSnapshot;
  readonly spec: Spec.Ref;
};

export type String = {
  readonly data: string;
  readonly spec: Spec.String;
};
