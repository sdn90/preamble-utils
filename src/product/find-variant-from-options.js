import _find from 'lodash/find';

/**
 * Find the variant with the given options
 * @param  {Object[]} productVariants
 * @param  {Object}   userOptions
 * @param  {string}   userOptions.option1
 * @param  {string}   userOptions.option2
 * @param  {string}   userOptions.option3
 * @return {Object}
 */
function findVariantFromOptions(productVariants, userOptions) {
  return _find(productVariants, userOptions);
}

export default findVariantFromOptions;
