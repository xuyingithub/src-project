'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.filter('danger', function (value) {
  switch (value) {
    case 'high':
      return '高危';
      break;
    case 'low':
      return '低危';
      break;
    case 'medium':
      return '中危';
      break;
  }
});

_vue2.default.filter('format', function (num) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g;
  return (num + '').replace(reg, '$&,');
});

//# sourceMappingURL=global-compiled.js.map