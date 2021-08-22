import * as Spec from '../../spec/mod';

export * from './util.g';

export type Type = {
  readonly _type: 'Count';
  readonly data: bigint;
  readonly spec: Spec.Count;
};
