import { Spec } from '../mod.g';

export type Type = {
  readonly _type: 'Count';
  readonly data: bigint;
  readonly spec: Spec.Count.Type;
};

export function newWith({
  data,
  spec,
}: {
  readonly data: bigint;
  readonly spec: Spec.Count.Type;
}): Type {
  return {
    _type: 'Count',
    data,
    spec,
  };
}

export function newFromDataWith(spec: Spec.Count.Type): (data: bigint) => Type {
  return (data) => ({
    _type: 'Count',
    data,
    spec,
  });
}

export function newFromSpecWith(data: bigint): (spec: Spec.Count) => Type {
  return (spec) => ({
    _type: 'Count',
    data,
    spec,
  });
}

export function copy({
  data,
  spec,
}: {
  readonly data?: (t: bigint) => bigint;
  readonly spec?: (t: Spec.Count.Type) => Spec.Count.Type;
}): (t: Type) => Type {
  return (t) => ({
    _type: 'Count',
    data: data?.(t.data) ?? t.data,
    spec: spec?.(t.spec) ?? t.spec,
  });
}
