import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_desktop_Wallpaper from './Ext/ux/desktop/Wallpaper.js';
import ElementParser from './runtime/ElementParser.js';

var EWCWallpaper = /*#__PURE__*/function (_Ext_ux_desktop_Wallp) {
  _inheritsLoose(EWCWallpaper, _Ext_ux_desktop_Wallp);

  var _super = _createSuper(EWCWallpaper);

  function EWCWallpaper() {
    var _this;

    _this = _Ext_ux_desktop_Wallp.call(this, [], []) || this;
    _this.xtype = 'wallpaper';
    return _this;
  }

  return EWCWallpaper;
}(Ext_ux_desktop_Wallpaper);

export { EWCWallpaper as default };

try {
  window.customElements.define('ext-wallpaper', ElementParser.withParsedCallback(EWCWallpaper));
} catch (e) {
  window.customElements.define('ext-wallpaper', EWCWallpaper);
}