import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_exporter_Base from '../../../Ext/exporter/Base.js';

var Ext_exporter_excel_Xlsx = /*#__PURE__*/function (_Ext_exporter_Base) {
  _inheritsLoose(Ext_exporter_excel_Xlsx, _Ext_exporter_Base);

  var _super = _createSuper(Ext_exporter_excel_Xlsx);

  Ext_exporter_excel_Xlsx.PROPERTIES = function PROPERTIES() {
    return ['author', 'binary', 'charset', 'data', 'defaultStyle', 'fileName', 'groupFooterStyle', 'groupHeaderStyle', 'mimeType', 'showSummary', 'tableHeaderStyle', 'title', 'titleStyle'];
  };

  Ext_exporter_excel_Xlsx.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_excel_Xlsx.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_excel_Xlsx.PROPERTIES());
    return Ext_exporter_Base.getProperties(properties);
  };

  Ext_exporter_excel_Xlsx.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_excel_Xlsx.EVENTS());
    return Ext_exporter_Base.getEvents(events);
  };

  _createClass(Ext_exporter_excel_Xlsx, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_Base.observedAttributes;
      Ext_exporter_excel_Xlsx.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_excel_Xlsx.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_excel_Xlsx(properties, events) {
    return _Ext_exporter_Base.call(this, properties.concat(Ext_exporter_excel_Xlsx.PROPERTIES()), events.concat(Ext_exporter_excel_Xlsx.EVENTS())) || this;
  }

  var _proto = Ext_exporter_excel_Xlsx.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_excel_Xlsx;
}(Ext_exporter_Base);

export { Ext_exporter_excel_Xlsx as default };