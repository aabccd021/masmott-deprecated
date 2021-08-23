import { ImageFieldValue, Spec } from '../mod.s';

export type Type = {
  readonly _type: 'Image';
  readonly data: ImageFieldValue.Type;
  readonly spec: Spec.Image.Type;
};
