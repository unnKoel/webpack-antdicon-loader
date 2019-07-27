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
  return "\n        import {WrapAndIcon} from 'webpack-antdicon-plugin/runtime.js';\n\n        const dynamicImportAntdIcons = () => {\n            import (\n                /* webpackChunkName: \"".concat(chunkName, "\" */ '@ant-design/icons/lib/dist.js'\n            ).then (allIcons => {\n                WrapAndIcon.loadAll (allIcons);\n            });\n        };\n        \n        // creating script tag block main thread, so create next task for it using 'setTimeout'.\n        setTimeout (dynamicImportAntdIcons, 0);\n\n        export default {\n            name: 'add',\n            theme: 'outline'\n        }\n  ");
}