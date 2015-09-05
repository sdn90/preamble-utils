/*
 * Shopify Ajax API module
 * Docs for Shopify's Ajax API
 * https://docs.shopify.com/support/your-website/themes/can-i-use-ajax-api
 */

const headers = {
  'Accept': 'text/javascript',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

export function getProduct(handle) {
  return fetch(`/products/${handle}`, {
    method: 'GET',
    credentials: 'include',
    headers
  });
}

export function addCart(options) {
  return fetch(`/cart/add.js`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(options),
    headers
  });
}

export function getCart() {
  return fetch('/cart.js', {
    method: 'GET',
    credentials: 'include',
    headers
  });
}

export function updateCart(options) {
  return fetch('/cart/update.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(options),
    headers
  });
}

export function changeCart(options) {
  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(options),
    headers
  });
}

export function clearCart() {
  return fetch('/cart/clear.js', {
    method: 'POST',
    credentials: 'include',
    headers
  });
}

export function getShipping(options) {
  let url = '/cart/shipping_rates.json?' +
            + 'shipping_address[zip]=' + options.zip
            + '&shipping_address[country]=' + options.country
            + '&shipping_address[province]=' + options.state
  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers
  });
}

