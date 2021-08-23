import { DocSnapshot } from '../../read-data-value';
import { Spec } from '../mod.s';

export type Type = {
  readonly _type: 'Owner';
  readonly data: DocSnapshot;
  readonly spec: Spec.Owner.Type;
};
