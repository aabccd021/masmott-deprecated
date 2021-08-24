import { _, Arr, D, DE, Dict, E, Either } from 'kira-pure';

import { FromUnknown, FromUnknownReport } from './from_unknown';

export type Fn<D, T> = (d: Dict<D>) => T;

export function everyValue<D>(f: (dEl: D) => boolean): Fn<D, boolean> {
  return (d) => Object.values(d).every(f);
}

export function values<D>(d: Dict<D>): Arr<D> {
  return Object.values(d);
}

export function dictFromUnknownWith(
  trace: string
): (value: unknown) => Either<FromUnknownReport, Dict<unknown>> {
  return (value) =>
    typeof value === 'object' &&
    Object.keys(value as Dict<unknown>).every((key) => typeof key === 'string')
      ? E.right(value as Dict<unknown>)
      : E.left({ message: 'is not dict', trace: [trace], value });
}

export function fromUnknown<T>(
  value: unknown,
  trace: string,
  elFromUnknown: FromUnknown<NonNullable<T>>
): Either<FromUnknownReport, Dict<T>> {
  return _(value)
    ._(dictFromUnknownWith(trace))
    ._(E.map(D.mapValues((val, key) => elFromUnknown(val, key))))
    ._(E.chain(DE.compact))
    ._v();
}
