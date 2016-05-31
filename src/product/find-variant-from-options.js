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
  // default to null if not included
  const optionsToFind = {
    option1: userOptions.option1 || null,
    option2: userOptions.option2 || null,
    option3: userOptions.option3 || null
  };

  return _find(productVariants, optionsToFind);
}

export default findVariantFromOptions;
