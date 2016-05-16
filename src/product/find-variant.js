import findWhere from 'lodash/collection/findWhere';

/**
 * Find the variant with the given options
 * @param  {Object[]} productVariants
 * @param  {Object[]} productOptions
 * @param  {Object}   userOptions
 * @param  {string}   userOptions.option1
 * @param  {string}   userOptions.option2
 * @param  {string}   userOptions.option3
 * @return {Object}
 */
function findVariantFromOptions(productVariants, productOptions, userOptions) {
  let optionsLength = Object.keys(userOptions).length;

  if (productOptions.length === optionsLength) {
    return findWhere(productVariants, userOptions);
  } else {
    return null;
  }
}

export default findVariantFromOptions;
