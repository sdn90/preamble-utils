import expect from 'expect';
import uniqueOptions from '../src/product/uniqueOptions';
import imageUrl from '../src/product/imageUrl';
import findVariant from '../src/product/findVariant';
import formatMoney from '../src/product/formatMoney';

let product = {
  "variants": [{
    "id": 1091557361,
    "title": "Black",
    "options": ["Black"],
    "option1": "Black",
    "option2": "Large",
    "option3": null,
    "price": 1799,
  }, {
    "id": 1091557365,
    "title": "Dark Pink",
    "options": ["Dark Pink"],
    "option1": "Dark Pink",
    "option2": "Large",
    "option3": null,
    "price": 1799,
  }, {
    "id": 1091557369,
    "title": "Blue",
    "options": ["Blue"],
    "option1": "Blue",
    "option2": null,
    "option3": null,
    "price": 2300
  }, {
    "id": 1091557373,
    "title": "Red Plum",
    "options": ["Red Plum"],
    "option1": "Red Plum",
    "option2": null,
    "option3": null,
    "price": 3400
  }],
  "images": [ "//cdn.shopify.com/s/files/1/0778/8307/products/dummy_image.jpeg?v=1424572403"],
  "options": ["Color", "Size"],
}

describe('Unique options', () => {
  it('should return an array of values of each option', () => {
    expect(uniqueOptions(product)).toEqual([
      { name: 'Color', values: ['Black', 'Dark Pink', 'Blue', 'Red Plum']},
      { name: 'Size', values: ['Large'] }
    ]);
  });

});

describe('Image URL', () => {
  it('should append string to filename', () => {
    expect(imageUrl(product.images[0], 'grande'))
      .toBe('//cdn.shopify.com/s/files/1/0778/8307/products/dummy_image_grande.jpeg?v=1424572403');
  });
});

describe('Find Variant', () => {
  it('should return a variant', () => {
    expect(
      findVariant(product, { option1: 'Black', option2: 'Large' })
    ).toBe(product.variants[0]);
  });
})

describe('Format Money', () => {
  it('should format money', () => {
    expect(formatMoney(1399)).toEqual('$13.99')
  })
})
