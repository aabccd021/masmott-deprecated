import { Spec } from '../mod.s';

export type Type = {
  readonly _type: 'Count';
  readonly data: bigint;
  readonly spec: Spec.Count.Type;
};
