import { ImageFieldValue, Spec } from '../mod.g';

export type Type = {
  readonly _type: 'Count';
  readonly data: ImageFieldValue.Type;
  readonly spec: Spec.Image.Type;
};
