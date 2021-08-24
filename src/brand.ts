import { O, Option } from 'kira-pure';

export type NameBrand = {
  readonly __NameBrand: unique symbol;
};

export type Name = {
  readonly first: string;
  readonly last: string;
};

export type BrandedName = Name & NameBrand;

function isNonEmptyString(s: Name): s is BrandedName {
  return s.first.length > 10;
}

export function makeNonEmptyString(s: string): Option<BrandedName> {
  return isNonEmptyString(s) ? O.some(s) : O.none;
}
