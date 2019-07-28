"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _iconsReact = _interopRequireDefault(require("@ant-design/icons-react"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var originalGet = _iconsReact["default"].get.bind(_iconsReact["default"]);

_iconsReact["default"].get = function (key, colors) {
  var target = originalGet(key, colors);
  return target || {
    icon: {
      tag: function tag(props) {
        return _react["default"].createElement(WrapAntIcon, _extends({
          type: key,
          primaryColor: colors.primaryColor,
          secondaryColor: colors.secondaryColor
        }, props));
      }
    }
  };
};
/**
 * AntIcon wrap Component
 */


var WrapAntIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(WrapAntIcon, _PureComponent);

  function WrapAntIcon() {
    _classCallCheck(this, WrapAntIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(WrapAntIcon).apply(this, arguments));
  }

  _createClass(WrapAntIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      WrapAntIcon.allIconInstances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var index = WrapAntIcon.allIconInstances.indexOf(this);
      WrapAntIcon.allIconInstances.splice(index, 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          primaryColor = _this$props.primaryColor,
          secondaryColor = _this$props.secondaryColor,
          props = _objectWithoutProperties(_this$props, ["type", "primaryColor", "secondaryColor"]); // judage target exsit, is not, show a empty svg.


      var target = originalGet(type, {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
      });

      if (target) {
        return _react["default"].createElement(_iconsReact["default"], this.props);
      } else {
        return _react["default"].createElement("svg", props);
      }
    }
  }], [{
    key: "loadAll",
    value: function loadAll(icons) {
      _iconsReact["default"].add.apply(_iconsReact["default"], _toConsumableArray(Object.keys(icons).map(function (key) {
        return icons[key];
      })));

      _iconsReact["default"].get = originalGet;
      this.allIconInstances.map(function (instance) {
        return instance.forceUpdate();
      });
      this.allIconInstances = [];
    }
  }]);

  return WrapAntIcon;
}(_react.PureComponent);

exports["default"] = WrapAntIcon;

_defineProperty(WrapAntIcon, "allIconInstances", []);

//# sourceMappingURL=runtime.js.map