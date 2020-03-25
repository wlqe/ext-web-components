import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRadiogroup = /*#__PURE__*/function (_Ext_field_RadioGroup) {
  _inheritsLoose(EWCRadiogroup, _Ext_field_RadioGroup);

  var _super = _createSuper(EWCRadiogroup);

  function EWCRadiogroup() {
    var _this;

    _this = _Ext_field_RadioGroup.call(this, [], []) || this;
    _this.xtype = 'radiogroup';
    return _this;
  }

  return EWCRadiogroup;
}(Ext_field_RadioGroup);

export { EWCRadiogroup as default };

try {
  window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
} catch (e) {
  window.customElements.define('ext-radiogroup', EWCRadiogroup);
}