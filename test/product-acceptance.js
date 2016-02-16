import expect from 'expect';
import uniqueOptions from '../src/product/unique-options';
import imageSize from '../src/product/image-size';
import findVariant from '../src/product/find-variant';
import formatMoney from '../src/product/format-money';
import firstVariant from '../src/product/first-available-variant';

let product = {
  "variants": [{
    "id": 1091557361,
    "title": "Black",
    "options": ["Black"],
    "option1": "Black",
    "option2": "Large",
    "option3": null,
    "price": 1799,
    "available": false
  }, {
    "id": 1091557365,
    "title": "Dark Pink",
    "options": ["Dark Pink"],
    "option1": "Dark Pink",
    "option2": "Large",
    "option3": null,
    "price": 1799,
    "available": true
  }, {
    "id": 1091557369,
    "title": "Blue",
    "options": ["Blue"],
    "option1": "Blue",
    "option2": null,
    "option3": null,
    "price": 2300,
    "available": true
  }, {
    "id": 1091557373,
    "title": "Red Plum",
    "options": ["Red Plum"],
    "option1": "Red Plum",
    "option2": null,
    "option3": null,
    "price": 3400,
    "available": false
  }],
  "images": [ "//cdn.shopify.com/s/files/1/0778/8307/products/dummy_image.jpeg?v=1424572403"],
  "options": ["Color", "Size"],
};

describe('Unique options', () => {
  it('should return an array of values of each option', () => {
    expect(uniqueOptions(product)).toEqual([
      { name: 'Color', values: ['Black', 'Dark Pink', 'Blue', 'Red Plum']},
      { name: 'Size', values: ['Large'] }
    ]);
  });

});

describe('Image Size', () => {
  it('should append string to filename', () => {
    expect(imageSize(product.images[0], 'grande'))
      .toBe('//cdn.shopify.com/s/files/1/0778/8307/products/dummy_image_grande.jpeg?v=1424572403');
  });
});

describe('Find Variant', () => {
  it('should return a variant', () => {
    expect(
      findVariant(product, { option1: 'Black', option2: 'Large' })
    ).toBe(product.variants[0]);
  });
});

describe('Format Money', () => {
  it('should format money', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(1399)).toEqual('$13.99');
    expect(formatMoney(10000)).toEqual('$100.00');
  });
});

describe('First available variant', () => {
  it('return the first available variant', () => {
    expect(
      firstVariant(product)
    ).toBe(product.variants[1]);
  });
});
