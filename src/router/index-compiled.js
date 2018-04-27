'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Login = require('../components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Index = require('../components/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: _Login2.default
  }, {
    path: '/index',
    name: 'index',
    component: _Index2.default
  }]
});

//# sourceMappingURL=index-compiled.js.map