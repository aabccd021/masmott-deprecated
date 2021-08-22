export type ImageFieldValue = {
  readonly url: string;
};

export type DocKey = {
  readonly col: string;
  readonly id: string;
};

export type Doc = Dict<Field>;

export type DocSnapshot = {
  readonly doc: Doc;
  readonly id: string;
};
