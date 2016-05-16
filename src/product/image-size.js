/**
 * Determine if a string is a supported image size
 * See https://help.shopify.com/themes/liquid/filters/url-filters#size-parameters
 * @param  {string} size
 * @return {boolean}
 */
function validateSize(size) {
  const validSizes = [
    'pico',
    'icon',
    'thumb',
    'small',
    'compact',
    'medium',
    'large',
    'grande',
    'original',
    '1024x1024',
    '2048x2048',
    'master'
  ];
  return validSizes.indexOf(size) !== -1;
}

/**
 * Get the URL to an image with a specific size
 * @param  {string} url URL to original image
 * @param  {string} size The desired size
 * @return {string} URL to the desired image size
 */
function imageSize(url, size) {
  if (validateSize(size) === false) { throw new Error('Invalid image size'); }

  const re = /\/products\/(.*)\.(.*)/;

  return url.replace(re, (match, p1, p2) => `/products/${p1}_${size}.${p2}`);
}

export default imageSize;
