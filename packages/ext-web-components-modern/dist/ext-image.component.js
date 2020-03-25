import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Image from './Ext/Image.js';
import ElementParser from './runtime/ElementParser.js';

var EWCImage = /*#__PURE__*/function (_Ext_Image) {
  _inheritsLoose(EWCImage, _Ext_Image);

  var _super = _createSuper(EWCImage);

  function EWCImage() {
    var _this;

    _this = _Ext_Image.call(this, [], []) || this;
    _this.xtype = 'image';
    return _this;
  }

  return EWCImage;
}(Ext_Image);

export { EWCImage as default };

try {
  window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));
} catch (e) {
  window.customElements.define('ext-image', EWCImage);
}