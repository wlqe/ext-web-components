import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_header_Container from './Ext/grid/header/Container.js';
import ElementParser from './runtime/ElementParser.js';

var EWCHeadercontainer = /*#__PURE__*/function (_Ext_grid_header_Cont) {
  _inheritsLoose(EWCHeadercontainer, _Ext_grid_header_Cont);

  var _super = _createSuper(EWCHeadercontainer);

  function EWCHeadercontainer() {
    var _this;

    _this = _Ext_grid_header_Cont.call(this, [], []) || this;
    _this.xtype = 'headercontainer';
    return _this;
  }

  return EWCHeadercontainer;
}(Ext_grid_header_Container);

export { EWCHeadercontainer as default };

try {
  window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
} catch (e) {
  window.customElements.define('ext-headercontainer', EWCHeadercontainer);
}