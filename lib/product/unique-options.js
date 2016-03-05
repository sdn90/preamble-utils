'use strict';

exports.__esModule = true;
exports['default'] = uniqueOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashArrayCompact = require('lodash/array/compact');

var _lodashArrayCompact2 = _interopRequireDefault(_lodashArrayCompact);

var _lodashCollectionPluck = require('lodash/collection/pluck');

var _lodashCollectionPluck2 = _interopRequireDefault(_lodashCollectionPluck);

var _lodashArrayUniq = require('lodash/array/uniq');

var _lodashArrayUniq2 = _interopRequireDefault(_lodashArrayUniq);

function uniqueOptions(productVariants, productOptions) {
  return productOptions.map(function (option, index) {
    var values = _lodashCollectionPluck2['default'](productVariants, 'option' + (index + 1));
    return {
      name: option,
      values: _lodashArrayUniq2['default'](_lodashArrayCompact2['default'](values))
    };
  });
}

module.exports = exports['default'];