import { IO } from 'kira-pure';

type Fn<I, T> = (i: IO<I>) => T;

export function map<I, T>(f: (i: I) => T): Fn<I, IO<T>> {
  return (i) => () => f(i());
}
