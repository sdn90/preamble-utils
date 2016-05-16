/**
 * [uniqueOptions description]
 * @param  {[type]} productVariants [description]
 * @param  {[type]} productOptions  [description]
 * @return {[type]}                 [description]
 */
export default function uniqueOptions(productVariants, productOptions) {
  return productOptions.map((option, index) => {
    const currentOptionNumber = (index + 1);
    const optionKey = `option${currentOptionNumber}`;

    // return the values
    const values =
      productVariants
        .map(variant => variant[optionKey])
        .filter(value => value !== null)
        .reduce((prev, current) => {
          return prev.indexOf(current) < 0 ? prev.concat(current) : prev;
        }, []);

    return {
      name: option,
      values
    };
  });
}
