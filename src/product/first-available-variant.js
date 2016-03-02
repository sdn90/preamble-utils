import _findWhere from 'lodash/collection/findWhere';

export default function firstVariant(variants) {
  return _findWhere(variants, { 'available': true });
}
