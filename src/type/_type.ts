import { ColReferFields } from './alias';

/**
 *
 */
export type ColRefer = {
  readonly colName: string;
  readonly fields: ColReferFields;
  readonly thisColRefers: readonly ColRefer[];
};

/**
 *
 */
export type ImageFieldValue = {
  readonly url: string;
};
