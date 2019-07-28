"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _loaderUtils = require("loader-utils");

/**
 * loader config:
 * {
 *  test: require.resolve('@ant-design/icons/lib/dist'),
 *  loader: 'webpack-antdicon-plugin',
 *  options:{
 *     chunkName:'antd-icons'
 *  }
 * }
 */
function _default() {
  var options = (0, _loaderUtils.getOptions)(this);
  var chunkName = options.chunkName || 'antd-icons';
  return "\n        import WrapAntIcon from 'webpack-antdicon-plugin/runtime.js';\n\n        // create script tag will block main thread, resolve it by creating new task.\n        const dynamicLoadAntIcons = () => {\n          import (\n            /* webpackChunkName: \"".concat(chunkName, "\" */ '!!./dist.js'\n          ).then (allIcons => {\n            WrapAntIcon.loadAll (allIcons);\n          });\n        };\n\n        setTimeout (dynamicLoadAntIcons, 0);\n\n        export default {\n          name:'add',\n          theme:'fill' \n        }");
}

//# sourceMappingURL=index.js.map