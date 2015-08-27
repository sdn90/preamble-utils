import findWhere from 'lodash/collection/findWhere';

export default function findVariant(product, options) {
  return findWhere(product.variants, options);
}
