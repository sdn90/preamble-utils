import compact from 'lodash/array/compact';
import pluck from 'lodash/collection/pluck';

export default function uniqueOptions(product) {
  return product.options.map((option, index) => {
    let values = pluck(product.variants, 'option' + (index + 1));
    return {
      name: option,
      values: compact(values)
    };
  });
}
