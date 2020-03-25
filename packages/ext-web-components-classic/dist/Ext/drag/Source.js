import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_drag_Item from '../../Ext/drag/Item.js';

var Ext_drag_Source = /*#__PURE__*/function (_Ext_drag_Item) {
  _inheritsLoose(Ext_drag_Source, _Ext_drag_Item);

  var _super = _createSuper(Ext_drag_Source);

  Ext_drag_Source.PROPERTIES = function PROPERTIES() {
    return ['activeCls', 'activeOnLongPress', 'autoDestroy', 'component', 'constrain', 'describe', 'element', 'groups', 'handle', 'listeners', 'proxy', 'revert'];
  };

  Ext_drag_Source.EVENTS = function EVENTS() {
    return [{
      name: 'beforedragstart',
      parameters: 'sender,info,event'
    }, {
      name: 'dragcancel',
      parameters: 'sender,info,event'
    }, {
      name: 'dragend',
      parameters: 'sender,info,event'
    }, {
      name: 'dragmove',
      parameters: 'sender,info,event'
    }, {
      name: 'dragstart',
      parameters: 'sender,info,event'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_drag_Source.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_Source.PROPERTIES());
    return Ext_drag_Item.getProperties(properties);
  };

  Ext_drag_Source.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_Source.EVENTS());
    return Ext_drag_Item.getEvents(events);
  };

  _createClass(Ext_drag_Source, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_Item.observedAttributes;
      Ext_drag_Source.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_Source.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_Source(properties, events) {
    return _Ext_drag_Item.call(this, properties.concat(Ext_drag_Source.PROPERTIES()), events.concat(Ext_drag_Source.EVENTS())) || this;
  }

  var _proto = Ext_drag_Source.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_Item.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_Item.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_Source;
}(Ext_drag_Item);

export { Ext_drag_Source as default };