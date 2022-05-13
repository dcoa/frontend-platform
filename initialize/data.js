function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import configureCache from "../auth/LocalForageCache";
import { getConfig } from "../config";
var apiConfig = {
  headers: {
    accept: 'application/json'
  }
};
export function getHttpConfig(_x) {
  return _getHttpConfig.apply(this, arguments);
}

function _getHttpConfig() {
  _getHttpConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(LMS_BASE_URL) {
    var apiService, url, _yield$apiService$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return configureCache();

          case 2:
            apiService = _context.sent;
            url = getConfig().ENVIRONMENT == "development" ? "http://".concat(LMS_BASE_URL, ":8000/eox-tenant/api/v1/mfe-api/") : "https://".concat(LMS_BASE_URL, "eox-tenant/api/v1/mfe-api/").concat(LMS_BASE_URL);
            _context.next = 6;
            return apiService.get(url, apiConfig);

          case 6:
            _yield$apiService$get = _context.sent;
            data = _yield$apiService$get.data;
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getHttpConfig.apply(this, arguments);
}
//# sourceMappingURL=data.js.map