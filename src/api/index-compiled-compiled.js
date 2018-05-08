'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _elementUi = require('element-ui');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 引入axios
var cancel = void 0;
var promiseArr = {};
var CancelToken = _axios2.default.CancelToken;
// 请求拦截器
_axios2.default.interceptors.request.use(function (config) {
  // 发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消');
    promiseArr[config.url] = cancel;
  } else {
    promiseArr[config.url] = cancel;
  }
  return config;
}, function (error) {
  return _promise2.default.reject(error);
});

// 响应拦截器即异常处理
_axios2.default.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求';
        break;
      case 401:
        error.message = '未授权，请重新登录';
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = '请求错误,未找到该资源';
        break;
      case 405:
        error.message = '请求方法未允许';
        break;
      case 408:
        error.message = '请求超时';
        break;
      case 500:
        error.message = '服务器端出错';
        break;
      case 501:
        error.message = '网络未实现';
        break;
      case 502:
        error.message = '网络错误';
        break;
      case 503:
        error.message = '服务不可用';
        break;
      case 504:
        error.message = '网络超时';
        break;
      case 505:
        error.message = 'http版本不支持该请求';
        break;
      default:
        error.message = '\u8FDE\u63A5\u9519\u8BEF' + error.response.status;
    }
  } else {
    error.message = '连接到服务器失败';
  }
  (0, _elementUi.Message)({
    message: error.message,
    type: 'error'
  });
  return _promise2.default.resolve(error.response);
});

_axios2.default.defaults.baseURL = '/api';
// 设置默认请求头
_axios2.default.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
};
_axios2.default.defaults.timeout = 10000;

exports.default = {
  // get请求
  get: function get(url, param) {
    return new _promise2.default(function (resolve) {
      (0, _axios2.default)({
        method: 'get',
        url: url,
        params: param,
        cancelToken: new CancelToken(function (c) {
          cancel = c;
        })
      }).then(function (res) {
        resolve(res);
      });
    });
  },

  // post请求
  post: function post(url, param) {
    return new _promise2.default(function (resolve) {
      (0, _axios2.default)({
        method: 'post',
        url: url,
        data: param,
        cancelToken: new CancelToken(function (c) {
          cancel = c;
        })
      }).then(function (res) {
        resolve(res);
      });
    });
  }
};

//# sourceMappingURL=index-compiled.js.map

//# sourceMappingURL=index-compiled-compiled.js.map