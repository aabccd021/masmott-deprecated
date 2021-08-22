export function imageField(value: ImageFieldValue): ImageField {
  return {
    _type: 'Image',
    value,
  };
}