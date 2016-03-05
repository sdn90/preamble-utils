"use strict";

exports.__esModule = true;
exports["default"] = imageSize;

function imageSize(url, size) {
  var re = /\/products\/(.*)\.(.*)/;
  return url.replace(re, function (match, p1, p2) {
    return "/products/" + p1 + "_" + size + "." + p2;
  });
}

module.exports = exports["default"];