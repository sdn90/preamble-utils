import min from 'lodash/math/min';

export default function lowestPrice(product) {
  let variantPrices = product.variants.map(variant => {
    return variant.price;
  });
  return min(variantPrices);
}
