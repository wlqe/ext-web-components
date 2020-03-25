import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_app_bind_BaseBinding from '../../../Ext/app/bind/BaseBinding.js';

var Ext_app_bind_Binding = /*#__PURE__*/function (_Ext_app_bind_BaseBin) {
  _inheritsLoose(Ext_app_bind_Binding, _Ext_app_bind_BaseBin);

  var _super = _createSuper(Ext_app_bind_Binding);

  Ext_app_bind_Binding.PROPERTIES = function PROPERTIES() {
    return ['deep', 'single'];
  };

  Ext_app_bind_Binding.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_Binding.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Binding.PROPERTIES());
    return Ext_app_bind_BaseBinding.getProperties(properties);
  };

  Ext_app_bind_Binding.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_Binding.EVENTS());
    return Ext_app_bind_BaseBinding.getEvents(events);
  };

  _createClass(Ext_app_bind_Binding, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_bind_BaseBin.observedAttributes;
      Ext_app_bind_Binding.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_Binding.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_Binding(properties, events) {
    return _Ext_app_bind_BaseBin.call(this, properties.concat(Ext_app_bind_Binding.PROPERTIES()), events.concat(Ext_app_bind_Binding.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_Binding.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_bind_BaseBin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_bind_BaseBin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_Binding;
}(Ext_app_bind_BaseBinding);

export { Ext_app_bind_Binding as default };