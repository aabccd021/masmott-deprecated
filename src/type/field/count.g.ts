import { _, E, Either } from 'kira-pure';

import { Spec } from '../mod.g';

export type Type = {
  readonly _type: 'Count';
  readonly data: bigint;
  readonly spec: Spec.Count.Type;
};

export function from({
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

export function fromDataWith(spec: Spec.Count.Type): (data: bigint) => Type {
  return (data) => ({
    _type: 'Count',
    data,
    spec,
  });
}

export function fromSpecWith(data: bigint): (spec: Spec.Count.Type) => Type {
  return (spec) => ({
    _type: 'Count',
    data,
    spec,
  });
}

export function intFromUnknown(u: unknown): Either<string, bigint> {
  return typeof u === 'number' && Number.isInteger(u) ? E.right(BigInt(u)) : E.left('aa');
}

export function fromUnknown(u: unknown): Either<string, Type> {
  return _(u)
    ._((u) => {
      const x = intFromUnknown(u as Type);
      const y = intFromUnknown(u as Type);
      return E.left('yaa');
    })
    ._v();
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
