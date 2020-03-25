import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_mixin_Templatable = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_mixin_Templatable, _Ext_Mixin);

  var _super = _createSuper(Ext_mixin_Templatable);

  Ext_mixin_Templatable.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_mixin_Templatable.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_Templatable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_Templatable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_mixin_Templatable.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_Templatable.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_mixin_Templatable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_mixin_Templatable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_Templatable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_Templatable(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_mixin_Templatable.PROPERTIES()), events.concat(Ext_mixin_Templatable.EVENTS())) || this;
  }

  var _proto = Ext_mixin_Templatable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_Templatable;
}(Ext_Mixin);

export { Ext_mixin_Templatable as default };