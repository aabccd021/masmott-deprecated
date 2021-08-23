import * as Spec from '../spec/_union';

export type Type = {
  readonly _type: 'CreationTime';
  readonly data: Date;
  readonly spec: Spec.CreationTime;
};

export type Z = Record<string, string>