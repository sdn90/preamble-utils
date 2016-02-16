Preamble Utils
============================
[![Build Status](https://travis-ci.org/sdn90/preamble-utils.svg?branch=master)](https://travis-ci.org/sdn90/preamble-utils)


A JavaScript utility library for Shopify themes.

Created for usage with [Preamble theme](https://github.com/sdn90/preamble) but is theme agnostic. The library solves common problems seen in all themes.

## Installation
`npm install preamble-utils --save`

## Usage

1. [findVariant](#findvariantproductoptions)
2. [formatMoney](#formatmoneymoney)
3. [imageSize](#imagesizeurl-size)
4. [uniqueOptions](#uniqueoptionsproduct)

#### findVariant(product, options)
Find a product variant with the given options.

If the number of options given is not equal to the number there are, nothing is returned.

##### Arguments
1. `product` *(Object)*: Object returned from `{{ product | json }}`.
2. `options` *(Object)*: The options of the variant you want to find. Keys should be named `option1`, `option2`, and `option3`.

##### Returns
*(Object)*: The variant object

##### Example

```javascript
import { findVariant } from 'preamble-utils';

// JSON returned from {{ product | json }}
let product = {
	...
	variants: [
		{ id: 1, option1: 'Small', option2: 'Green', option3: null },
		{ id: 2, option1: 'Medium', option2: 'Red', option3: null },
		{ id: 3, option1: 'Large', option2: 'Grey', option3: null }
	]
	...
}

findVariant(product, { option1: 'Medium', option2: 'Red'});
// → { id: 2, option1: 'Medium', option2: 'Red' } 
```

#### formatMoney(money)
Adds a decimal to money.

##### Arguments
1. `money` *(String)*

##### Returns
*(String)*

```javascript
import { formatMoney } from 'preamble-utils';

formatMoney('1499');
// → '$14.99'
```

#### imageSize(url, size)
Gets the specified image size.

##### Arguments
1. `url` *(String)*: The master/original image URL
2. `size` *(String)*: The desired size. See [Shopify Docs](https://docs.shopify.com/themes/liquid-documentation/filters/url-filters#size-parameters) for possible sizes.

##### Returns
*(String)*: URL of specified image size

##### Example
```javascript
import { imageSize } from 'preamble-utils';

let imageUrl = 'https://shopifycdnurl.com/ImageFile.jpg'

imageSize(imageUrl, 'thumbnail');
// → 'https://shopifycdnurl.com/ImageFile-thumbnail.jpg'

imageSize(imageUrl, 'grande');
// → 'https://shopifycdnurl.com/ImageFile-grande.jpg'
```

#### uniqueOptions(product)

##### Arguments
1. `product` *(Object)*: Object returned from `{{ product | json }}`

##### Returns
*(Array)*: A collection of each option's unique values.

```javascript
[{ 
	name: 'Size',
	values: ['Small', 'Large']
},
{ 
	name: 'Color',
	values: ['Green', 'Black']
}]
```

##### Example

```javascript
import { uniqueOptions } from 'preamble-utils';

// product returned from {{ product | json }}
let product = {
	...
	options: ['Size', 'Color'],
	variants: [
		{ option1: 'Small', option2: 'White' },
		{ option1: 'Small', option2: 'Red' },
		{ option1: 'Small', option3: 'Green' }
	]
	...
};

uniqueOptions(product);
// [
//     { name: 'Size', values: ['Small'] },
//     { name: 'Color', values: ['White', 'Red', 'Green'] }
// ]
```

## License
The MIT License (MIT)

Copyright (c) 2015 Steven Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
