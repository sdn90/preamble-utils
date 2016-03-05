'use strict';

exports.__esModule = true;
exports['default'] = findVariant;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashCollectionFindWhere = require('lodash/collection/findWhere');

var _lodashCollectionFindWhere2 = _interopRequireDefault(_lodashCollectionFindWhere);

function findVariant(productVariants, productOptions, userOptions) {
  var optionsLength = Object.keys(userOptions).length;

  if (productOptions.length === optionsLength) {
    return _lodashCollectionFindWhere2['default'](productVariants, userOptions);
  } else {
    return undefined;
  }
}

module.exports = exports['default'];