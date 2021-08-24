import { Dict, Either } from 'kira-pure';

import { FromUnknownReport } from '../kira/from_unknown';
import { D, Str } from '../kira/mod';

export type Type = Dict<string>;

export function fromUnknown(value: unknown, trace: string): Either<FromUnknownReport, Type> {
  return D.fromUnknown(value, trace, Str.fromUnknown);
}
