'use strict';

exports.__esModule = true;
exports['default'] = firstVariant;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashCollectionFindWhere = require('lodash/collection/findWhere');

var _lodashCollectionFindWhere2 = _interopRequireDefault(_lodashCollectionFindWhere);

function firstVariant(variants) {
  return _lodashCollectionFindWhere2['default'](variants, { 'available': true });
}

module.exports = exports['default'];