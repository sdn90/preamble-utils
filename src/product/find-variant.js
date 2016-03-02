import findWhere from 'lodash/collection/findWhere';

export default function findVariant(productVariants, productOptions, userOptions) {
  let optionsLength = Object.keys(userOptions).length;

  if (productOptions.length === optionsLength) {
    return findWhere(productVariants, userOptions);
  } else {
    return undefined;
  }
}
