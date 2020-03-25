import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_plugin_RowExpander from '../../../Ext/grid/plugin/RowExpander.js';

var Ext_grid_plugin_RowWidget = /*#__PURE__*/function (_Ext_grid_plugin_RowE) {
  _inheritsLoose(Ext_grid_plugin_RowWidget, _Ext_grid_plugin_RowE);

  var _super = _createSuper(Ext_grid_plugin_RowWidget);

  Ext_grid_plugin_RowWidget.PROPERTIES = function PROPERTIES() {
    return ['bodyBefore', 'columnWidth', 'defaultWidgetUI', 'expandOnDblClick', 'expandOnEnter', 'headerWidth', 'id', 'lockedTpl', 'lockedWidget', 'rowBodyTpl', 'scrollIntoViewOnExpand', 'selectRowOnExpand', 'stateEvents', 'widget'];
  };

  Ext_grid_plugin_RowWidget.EVENTS = function EVENTS() {
    return [{
      name: 'collapsebody',
      parameters: 'rowNode,record,expandRow'
    }, {
      name: 'expandbody',
      parameters: 'rowNode,record,expandRow'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_RowWidget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_RowWidget.PROPERTIES());
    return Ext_grid_plugin_RowExpander.getProperties(properties);
  };

  Ext_grid_plugin_RowWidget.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_RowWidget.EVENTS());
    return Ext_grid_plugin_RowExpander.getEvents(events);
  };

  _createClass(Ext_grid_plugin_RowWidget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_RowE.observedAttributes;
      Ext_grid_plugin_RowWidget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_RowWidget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_RowWidget(properties, events) {
    return _Ext_grid_plugin_RowE.call(this, properties.concat(Ext_grid_plugin_RowWidget.PROPERTIES()), events.concat(Ext_grid_plugin_RowWidget.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_RowWidget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_RowE.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_RowE.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_RowWidget;
}(Ext_grid_plugin_RowExpander);

export { Ext_grid_plugin_RowWidget as default };