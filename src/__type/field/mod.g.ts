import { Spec } from '../mod.g';
import * as Count from './count.g';
import * as CreationTime from './creation_time.g';

export type Type = Count.Type | CreationTime.Type;

export function map<T>({
  Count,
  CreationTime,
}: {
  readonly Count: (t: Count.Type) => T;
  readonly CreationTime: (t: CreationTime.Type) => T;
}): (t: Type) => T {
  return (t) => {
    if (t._type === 'Count') {
      return Count(t);
    }
    return CreationTime(t);
  };
}

export function fold<T>({
  Count,
  CreationTime,
}: {
  readonly Count: (data: bigint, spec: Spec.Count.Type) => T;
  readonly CreationTime: (data: Date, spec: Spec.CreationTime.Type) => T;
}): (t: Type) => T {
  return (t) => {
    if (t._type === 'Count') {
      return Count(t.data, t.spec);
    }
    return CreationTime(t.data, t.spec);
  };
}

export { Count, CreationTime };
