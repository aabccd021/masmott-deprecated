export type CreationTimeField = {
  readonly _type: 'CreationTime';
};

/**
 *CreationTimeField
 */
export function IncrementField(value: number): IncrementField {
  return {
    _type: 'Increment',
    value,
  };
}

export type IncrementField = {
  readonly _type: 'Increment';
  readonly value: number;
};

export type WriteDoc = Dict<WriteField>;

export function RefUpdateField(doc: WriteDoc): RefUpdateField {
  return {
    _type: 'RefUpdate',
    doc,
  };
}

export type RefUpdateField = {
  readonly _type: 'RefUpdate';
  // eslint-disable-next-line no-use-before-define
  readonly doc: WriteDoc;
};

export type WriteDocSnapshot = {
  readonly doc: WriteDoc;
  readonly id: string;
};
