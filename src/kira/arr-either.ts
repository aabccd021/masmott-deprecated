import { _, Arr, E, Either } from 'kira-pure';

import * as A from './arr';

export type Fn<L, R, T> = (d: Arr<Either<L, R>>) => T;

export function compact<L, R>(a: Arr<Either<L, R>>): Either<L, Arr<R>> {
  return _(a)
    ._(
      A.reduce(E.rightE<L, Arr<R>>([]), (acc, val) =>
        _(acc)
          ._(
            E.chain((acc) =>
              _(val)
                ._(E.map(A.fromAppended(acc)))
                ._v()
            )
          )
          ._v()
      )
    )
    ._v();
}
