'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _homePage = require('../components/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

var _Index = require('../components/index/Index');

var _Index2 = _interopRequireDefault(_Index);

var _list = require('../components/exclusiveSrc/list');

var _list2 = _interopRequireDefault(_list);

var _list3 = require('../components/award/list');

var _list4 = _interopRequireDefault(_list3);

var _list5 = require('../components/understand/list');

var _list6 = _interopRequireDefault(_list5);

var _details = require('../components/exclusiveSrc/details');

var _details2 = _interopRequireDefault(_details);

var _submit = require('../components/exclusiveSrc/submit');

var _submit2 = _interopRequireDefault(_submit);

var _test = require('../components/award/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  mode: 'history',
  routes: [{
    path: '/homePage',
    name: 'homePage',
    component: _homePage2.default,
    redirect: '/homePage/index',
    children: [{
      path: 'index',
      name: 'index',
      component: _Index2.default
    }, {
      path: 'src',
      name: 'exclusiveSrc',
      component: _list2.default
    }, {
      path: 'details',
      name: 'srcDetails',
      component: _details2.default
    }, {
      path: 'submit',
      name: 'submit',
      component: _submit2.default
    }, {
      path: 'award',
      name: 'award',
      component: _list4.default
    }, {
      path: 'understand/:id',
      name: 'understand',
      component: _list6.default
    }, {
      path: 'test',
      name: 'test',
      component: _test2.default
    }]
  }]
});

//# sourceMappingURL=index-compiled.js.map