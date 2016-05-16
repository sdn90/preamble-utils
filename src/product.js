import findVariantFromOptions from './product/find-variant';

export default class Product {
  constructor(product) {
    this._product = product;
  }
  findVariantFromOptions(userOptions) {
    return findVariantFromOptions(
      this._product.variants,
      this._product.options,
      userOptions
    );
  }
}
