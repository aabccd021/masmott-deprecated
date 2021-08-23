import { E, Either } from 'kira-pure';

export type FromUnknownReport = {
  readonly message: string;
  readonly trace: readonly string[];
  readonly value: unknown;
};

export function addTrace(trace: string): (r: FromUnknownReport) => FromUnknownReport {
  return (r) => ({
    ...r,
    trace: [trace, ...r.trace],
  });
}

export function fromUnknown(value: unknown, trace: string): Either<FromUnknownReport, string> {
  return typeof value === 'string'
    ? E.right(value)
    : E.left({ message: 'is not string', trace: [trace], value });
}
