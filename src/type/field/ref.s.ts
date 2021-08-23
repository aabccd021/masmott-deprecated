import { DocSnapshot } from '../../read-data-value';
import { Spec } from '../mod.s';

export type Type = {
  readonly _type: 'Ref';
  readonly data: DocSnapshot;
  readonly spec: Spec.Ref.Type;
};
