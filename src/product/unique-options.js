import compact from 'lodash/array/compact';
import pluck from 'lodash/collection/pluck';
import uniq from 'lodash/array/uniq';

export default function uniqueOptions(productVariants, productOptions) {
  return productOptions.map((option, index) => {
    let values = pluck(productVariants, 'option' + (index + 1));
    return {
      name: option,
      values: uniq(compact(values))
    };
  });
}
