Preamble.js
============================
[![Build Status](https://travis-ci.org/sdn90/preamblejs.svg?branch=master)](https://travis-ci.org/sdn90/preamblejs)

A JavaScript library for Shopify themes. 

Created for usage with [Preamble theme](https://github.com/sdn90/preamble) but is theme agnostic. The library solves common problems seen in all themes.

## Installation
`npm install preamblejs --save`

## What's Included

### Product Helpers
Utilities for manipulating JSON outputted from `{{ product | json }}`.

### AJAX API
A Promise based Shopify AJAX API client. Includes all [officially supported endpoints](https://docs.shopify.com/support/your-website/themes/can-i-use-ajax-api).

## Usage

### Products


#### findVariant(product, options)
Returns a variant with the given options

```javascript
import findVariant from 'preamblejs';

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
import formatMoney from 'preamblejs/product/formatMoney';

let money = '1499';

formatMoney(money);
// → '$14.99'
```

#### imageUrl(url)
```javascript
import imageUrl from 'preamblejs/product/imageUrl';

let image = 'https://shopifycdnurl.com/ImageFile.jpg'

imageUrl(image, 'thumbnail');
// → 'https://shopifycdnurl.com/ImageFile-thumbnail.jpg'

imageUrl(image, 'grande');
// → 'https://shopifycdnurl.com/ImageFile-grande.jpg'
```

#### uniqueOptions(product)
```javascript
import uniqueOptions from 'preamblejs/product/uniqueOptions';

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

### AJAX API
All functions return a promise

#### getProduct(handle)
```javascript
import getProduct from 'preamblejs/cart';

getProduct('white-tshirt').then(res => {

	// Loading state. Do stuff such as showing a
	// loading spinner here.
	
	return res.json();
	
}).then(json => {

	// Do stuff with response	
	
}).catch(error => {
	
	// Handle errors here
	
})
```

#### addCart(options)

#### getCart()

#### updateCart(options)

#### clearCart()

#### getShipping(options)

