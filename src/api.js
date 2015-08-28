/*
 * Shopify Ajax API module
 * Docs for Shopify's Ajax API
 * https://docs.shopify.com/support/your-website/themes/can-i-use-ajax-api
 */

export function getProduct(handle) {
  return fetch(`/products/${handle}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
}

export function addCart(id, quantity = 1) {
  return fetch(`/cart/add.js`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ id, quantity })
  }).then(res => {
    return res.json();
  })
}

export function getCart() {
  return fetch('/cart.js', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => {
    return res.json();
  })
}

export function updateCart(id, quantity) {
  return fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ id, quantity })
  }).then(res => {
    return res.json();
  });
}

export function changeCart(id, quantity) {
  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ id, quantity })
  }).then(res => {
    return res.json();
  });
}

export function clearCart() {
  return fetch('/cart/clear.js', {
    method: 'POST',
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
}

export function getShipping(obj) {
}

