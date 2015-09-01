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

export function addCart(id, quantity = 1) {
  return fetch(`/cart/add.js`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ id, quantity }),
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

export function updateCart(id, quantity) {
  return fetch('/cart/update.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ id, quantity }),
    headers
  });
}

export function changeCart(id, quantity) {
  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ id, quantity }),
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

export function getShipping(obj) {
}

