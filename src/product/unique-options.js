/**
 * Returns the unique option values
 * @param  {Object[]} productVariants
 * @param  {Object[]} productOptions
 * @return {Object[]}
 */
function uniqueOptions(productVariants, productOptions) {
  return productOptions.map((option, index) => {
    const currentOptionNumber = (index + 1);
    const optionKey = `option${currentOptionNumber}`;

    // get the option's values
    const values =
      productVariants
        .map(variant => variant[optionKey])
        .filter(value => value !== null)
        // eslint-disable-next-line
        .reduce((prev, current) => {
          return prev.indexOf(current) < 0 ? prev.concat(current) : prev;
        }, []);

    return { name: option, values };
  });
}

export default uniqueOptions;
