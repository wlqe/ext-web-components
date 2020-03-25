import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Toggle from './Ext/form/Toggle.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTogglefield = /*#__PURE__*/function (_Ext_form_Toggle) {
  _inheritsLoose(EWCTogglefield, _Ext_form_Toggle);

  var _super = _createSuper(EWCTogglefield);

  function EWCTogglefield() {
    var _this;

    _this = _Ext_form_Toggle.call(this, [], []) || this;
    _this.xtype = 'togglefield';
    return _this;
  }

  return EWCTogglefield;
}(Ext_form_Toggle);

export { EWCTogglefield as default };

try {
  window.customElements.define('ext-togglefield', ElementParser.withParsedCallback(EWCTogglefield));
} catch (e) {
  window.customElements.define('ext-togglefield', EWCTogglefield);
}