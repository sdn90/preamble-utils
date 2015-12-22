import _findWhere from 'lodash/collection/findWhere';

export default function firstVariant(product) {
  return _findWhere(product.variants, { 'available': true });
}
