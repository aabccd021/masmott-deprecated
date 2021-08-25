import type { Dict, Option } from 'kira-pure';
import { O } from 'kira-pure';

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

export type Pointer = { readonly id: string } & { readonly __PointerBrand: unique symbol };

const x: Pointer = { id: '1' };

const y = true as Pointer;

function f(z: Pointer): void {}

const z: Dict<number> = { x: 10 };
