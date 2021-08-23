import { _, E, Either, P, PE } from 'kira-pure';

import { Str } from '../../kira/mod';
import { FromUnknownReport } from '../../kira/str';

export type Type = {
  readonly _type: 'Count';
  readonly countedCol: string;
  readonly groupByRef: string;
};

export function from({
  countedCol,
  groupByRef,
}: {
  readonly countedCol: string;
  readonly groupByRef: string;
}): Type {
  return {
    _type: 'Count',
    countedCol,
    groupByRef,
  };
}

export function fromUnknown(u: unknown, trace: string): Either<FromUnknownReport, Type> {
  return _(
    P.tuple2(
      Str.fromUnknown((u as Type).countedCol, 'countedCol'),
      Str.fromUnknown((u as Type).groupByRef, 'groupByRef')
    )
  )
    ._(PE.compact2)
    ._(E.map2((countedCol, groupByRef) => from({ countedCol, groupByRef })))
    ._(E.mapLeft(Str.addTrace(trace)))
    ._v();
}

export function copy({
  countedCol,
  groupByRef,
}: {
  readonly countedCol?: (t: string) => string;
  readonly groupByRef?: (t: string) => string;
}): (t: Type) => Type {
  return (t) => ({
    _type: 'Count',
    countedCol: countedCol?.(t.countedCol) ?? t.countedCol,
    groupByRef: groupByRef?.(t.groupByRef) ?? t.groupByRef,
  });
}
