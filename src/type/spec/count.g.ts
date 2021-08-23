export type Type = {
  readonly _type: 'Count';
  readonly countedCol: string;
  readonly groupByRef: string;
};

export function newWith({
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
