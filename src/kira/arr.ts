import { Arr } from 'kira-pure';

export function fromAppended<A>(arr: Arr<A>): (newEl: A) => Arr<A> {
  return (newEl) => [...arr, newEl];
}

export type Fn<A, T> = (d: Arr<A>) => T;

export function reduce<A, T>(initialAcc: T, reducer: (acc: T, val: A, idx: number) => T): Fn<A, T> {
  return (arr) => arr.reduce(reducer, initialAcc);
}

export function append<A>(newEl: A): Fn<A, Arr<A>> {
  return (arr) => [...arr, newEl];
}
