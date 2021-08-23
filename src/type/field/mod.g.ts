import * as Count from './count.g';
import * as CreationTime from './creation_time.g';

export type Union = Count.Type | CreationTime.Type;

export function map<T>({
  Count,
  CreationTime,
}: {
  readonly Count: (t: Count.Type) => T;
  readonly CreationTime: (t: CreationTime.Type) => T;
}): (t: Union) => T {
  return (t) => {
    if (t._type === 'Count') {
      return Count(t);
    }
    if (t._type === 'CreationTime') {
      return CreationTime(t);
    }
    throw Error();
  };
}

export { Count, CreationTime };
