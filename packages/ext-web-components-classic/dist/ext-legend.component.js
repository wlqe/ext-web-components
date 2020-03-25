import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_Legend from './Ext/chart/Legend.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLegend = /*#__PURE__*/function (_Ext_chart_Legend) {
  _inheritsLoose(EWCLegend, _Ext_chart_Legend);

  var _super = _createSuper(EWCLegend);

  function EWCLegend() {
    var _this;

    _this = _Ext_chart_Legend.call(this, [], []) || this;
    _this.xtype = 'legend';
    return _this;
  }

  return EWCLegend;
}(Ext_chart_Legend);

export { EWCLegend as default };

try {
  window.customElements.define('ext-legend', ElementParser.withParsedCallback(EWCLegend));
} catch (e) {
  window.customElements.define('ext-legend', EWCLegend);
}