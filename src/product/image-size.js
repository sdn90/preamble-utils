/**
 * Get the URL to an image with a specific size
 * @param  {string} url URL to original image
 * @param  {string} size The desired size
 * @return {string} URL to the desired image size
 */
function imageSize(url, size) {
  var re = /\/products\/(.*)\.(.*)/;

  return url.replace(re, function(match, p1, p2) {
    return "/products/" + p1 + "_" + size + "." + p2;
  });
}

module.exports = imageSize;
