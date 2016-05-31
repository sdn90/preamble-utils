import _find from 'lodash/find';

export default function firstVariant(variants) {
  return _find(variants, { available: true });
}
