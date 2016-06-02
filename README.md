Preamble Utils
============================
[![Build Status](https://travis-ci.org/sdn90/preamble-utils.svg?branch=master)](https://travis-ci.org/sdn90/preamble-utils)


A JavaScript utility library for Shopify themes.

## Installation

### Webpack, Browserify, etc.
`npm install preamble-utils --save`

```javascript
// commonjs
var Preamble = require('preamble-utils');

// es6 modules
import { findVariantFromOptions } from 'preamble-utils';
```

### CDN
**Unminified**  
[https://npmcdn.com/preamble-utils/dist/preamble-utils.js](https://npmcdn.com/preamble-utils/dist/preamble-utils.js)

**Minified**  
[https://npmcdn.com/preamble-utils/dist/preamble-utils.min.js](https://npmcdn.com/preamble-utils/dist/preamble-utils.min.js)


## API
Arguments expect the format of the output of `{{ product | json }}`

```javascript
{
  title: 'Product Title',
  variants: [{
    option1: 'Blue',
    option2: 'Small',
    option3: null,
    available: true,
    price: 1399
  }],
  options: ['Color', 'Size']
}
```

##### findVariantFromOptions(variants: object[], options: object): object | undefined
Find a variant with the given options.

Any option that is not included is considered null.

`const options = { option1: 'White' }` is the same as:

`const options = { option1: 'White', option2: null, option3: null }`

Returns `undefined` if none are found.

```javascript
const variants = [
    { title: 'Blue / Small', option1: 'Blue', option2: 'Small', option3: null },
    { title: 'Green / Small', option1: 'Green', option2: 'Small', option3: null },
];

findVariantFromOptions(variants, {
  option1: 'Green',
  option2: 'Small'
});
// { title: 'Green / Small', option1: 'Green', option2: 'Small', option3: null }
```

##### firstAvailableVariant(variants: object[]): object | undefined
Get the first available variant. Returns `undefined` if none are available.

```javascript
const variants = [
    { title: 'Blue / Small', available: false },
    { title: 'Green / Small', available: true }
];

firstAvailableVariant(variants)
// { title: 'Green / Small', available: true }
```

##### formatMoney(money: integer, prefix: string): string
Simple money formatting. `prefix` defaults to `'$'`.

```javascript
formatMoney(1399);
// '$13.99'

formatMoney(1399, '£');
// '£13.99'
```

##### imageSize(url: string, size: string): string
Get the URL to an image size.

`size` must be a valid image size. See [https://help.shopify.com/themes/liquid/filters/url-filters#size-parameters]() for possible values.

```javascript
const url = 'https://cdn.shopify.com/s/files/1/0383/9765/products/10516_indigo_med_wash_l_z.jpeg?v=1401811137';

imageSize(url, 'large');
// http://cdn.shopify.com/s/files/1/0383/9765/products/10516_indigo_med_wash_l_z_large.jpeg?v=1401811137
```

##### uniqueOptions(variants: object[], options: object[]): object[]
Get the unique options and its values

```javascript
const variants = [
    { title: 'Blue / Small', option1: 'Blue', option2: 'Small', option3: null },
    { title: 'Green / Small', option1: 'Green', option2: 'Small', option3: null },
];
const options = ['Color', 'Size'];

uniqueOptions(variants, options);
// [
//   { name: 'Color', values: ['Blue', 'Green'] },
//   { name: 'Size', values: ['Small'] }
// ]
```
