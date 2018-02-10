//@ts-check
/**
 * @typedef Variant
 * @property {number} id
 * @property {string} option1
 * @property {string} option2
 * @property {string} option3
 */

/**
 * Find the variant with the given options
 * @param  {Variant[]} productVariants
 * @param  {Object}   userOptions
 * @param  {string}   userOptions.option1
 * @param  {string}   userOptions.option2
 * @param  {string}   userOptions.option3
 * @return {Variant}
 */
function findVariantFromOptions(productVariants, userOptions) {
  // default to null if not included
  var optionsToFind = {
    option1: userOptions.option1 || null,
    option2: userOptions.option2 || null,
    option3: userOptions.option3 || null
  };

  for (var i = 0; i < productVariants.length; i++) {
    var isSameVariant =
      productVariants[i].option1 === optionsToFind.option1 &&
      productVariants[i].option2 === optionsToFind.option2 &&
      productVariants[i].option3 === optionsToFind.option3;

    if (isSameVariant) {
      return productVariants[i];
    }
  }

  return undefined;
}

module.exports = findVariantFromOptions;
