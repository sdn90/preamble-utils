import findWhere from 'lodash/collection/findWhere';

export default function findVariant(product, options) {
  let optionsLength = Object.keys(options).length;

  if (product.options.length === optionsLength) {
    return findWhere(product.variants, options);
  }
}
