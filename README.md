Preamble Utils
============================
[![Build Status](https://travis-ci.org/sdn90/preamble-utils.svg?branch=master)](https://travis-ci.org/sdn90/preamble-utils)

A JavaScript utility library for Shopify themes.

Created for usage with [Preamble theme](https://github.com/sdn90/preamble) but is theme agnostic. The library solves common problems seen in all themes.

## Installation
`npm install preamble-utils --save`

## Usage

#### findVariant(product, options)
Returns a variant with the given options

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

let options = { option1: 'Medium', option2: 'Red' };

findVariant(product, options);
// → { id: 2, option1: 'Medium', option2: 'Red' } 
```

#### formatMoney(money)
```javascript
import { formatMoney } from 'preamble-utils';

let money = '1499';

formatMoney(money);
// → '$14.99'
```

#### imageSize(url)
```javascript
import { imageSize } from 'preamble-utils';

let image = 'https://shopifycdnurl.com/ImageFile.jpg'

imageSize(image, 'thumbnail');
// → 'https://shopifycdnurl.com/ImageFile-thumbnail.jpg'

imageSize(image, 'grande');
// → 'https://shopifycdnurl.com/ImageFile-grande.jpg'
```

#### uniqueOptions(product)
```javascript
import { uniqueOptions } from 'preamble-utils';

let product = {
	...
	options: ['Size', 'Color'],
	variants: [
		{ option1: 'Small', option2: 'White' },
		{ option1: 'Small', option2: 'Red' },
		{ option1: 'Small', option3: 'Green' }
	]
}

uniqueOptions(product);
// → 
// [
//     { name: 'Size', values: ['Small'] },
//     { name: 'Color', values: ['White', 'Red', 'Green'] }
// ]
```
