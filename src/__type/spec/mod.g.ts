import * as Count from './count.s';
import * as CreationTime from './creationTime.s';
import * as Image from './image.s';
import * as Owner from './owner.s';
import * as Ref from './ref.s';
import * as String from './string.s';
export type Type =
  | Count.Type
  | CreationTime.Type
  | Image.Type
  | Owner.Type
  | Ref.Type
  | String.Type;
