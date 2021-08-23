import { Spec } from '../mod.s';

export type Type = {
  readonly _type: 'String';
  readonly data: string;
  readonly spec: Spec.String.Type;
};
