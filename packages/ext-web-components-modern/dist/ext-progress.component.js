import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './runtime/ElementParser.js';

var EWCProgress = /*#__PURE__*/function (_Ext_ProgressBarWidge) {
  _inheritsLoose(EWCProgress, _Ext_ProgressBarWidge);

  var _super = _createSuper(EWCProgress);

  function EWCProgress() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, [], []) || this;
    _this.xtype = 'progress';
    return _this;
  }

  return EWCProgress;
}(Ext_ProgressBarWidget);

export { EWCProgress as default };

try {
  window.customElements.define('ext-progress', ElementParser.withParsedCallback(EWCProgress));
} catch (e) {
  window.customElements.define('ext-progress', EWCProgress);
}