/**
 * Returns the unique option values
 * @param  {Object[]} productVariants
 * @param  {array} productOptions
 * @return {Object[]}
 */
function uniqueOptions(productVariants, productOptions) {
  return productOptions.map(function(option, index) {
    var currentOptionNumber = index + 1;
    var optionKey = "option" + currentOptionNumber;

    // get the option's values
    var values = productVariants
      .map(function(variant) {
        return variant[optionKey];
      })
      .filter(function(value) {
        return value !== null;
      })
      .reduce(function(prev, current) {
        return prev.indexOf(current) < 0 ? prev.concat(current) : prev;
      }, []);

    return { name: option, values: values };
  });
}

module.exports = uniqueOptions;
