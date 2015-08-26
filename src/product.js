import _ from 'lodash';

/* returns array
 * [
 *  { name: 'Color', values: ['Red', 'Blue', 'Green'] },
 *  { name: 'Size', values: ['S', 'M', 'L', 'XL'] }
 * ]
 */
export function uniqueOptions(product) {
  return product.options.map((option, index) => {
    let values = _.pluck(product.variants, 'option' + (index + 1));
    return {
      name: option,
      values: _.compact(values)
    };
  });
}

export function findVariant(product, options) {
  return _.findWhere(product.variants, options);
}

export function imageUrl(url, size) {
  let re = /\/products\/(.*)\.(.*)/;
  return url.replace(re, (match, p1, p2) => {
    return `/products/${p1}_${size}.${p2}`;
  });
}

