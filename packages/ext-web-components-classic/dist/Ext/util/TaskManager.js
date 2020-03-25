import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_TaskRunner from '../../Ext/util/TaskRunner.js';

var Ext_util_TaskManager = /*#__PURE__*/function (_Ext_util_TaskRunner) {
  _inheritsLoose(Ext_util_TaskManager, _Ext_util_TaskRunner);

  var _super = _createSuper(Ext_util_TaskManager);

  Ext_util_TaskManager.PROPERTIES = function PROPERTIES() {
    return ['fireIdleEvent', 'interval'];
  };

  Ext_util_TaskManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_TaskManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_TaskManager.PROPERTIES());
    return Ext_util_TaskRunner.getProperties(properties);
  };

  Ext_util_TaskManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_TaskManager.EVENTS());
    return Ext_util_TaskRunner.getEvents(events);
  };

  _createClass(Ext_util_TaskManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_TaskRunner.observedAttributes;
      Ext_util_TaskManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_TaskManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_TaskManager(properties, events) {
    return _Ext_util_TaskRunner.call(this, properties.concat(Ext_util_TaskManager.PROPERTIES()), events.concat(Ext_util_TaskManager.EVENTS())) || this;
  }

  var _proto = Ext_util_TaskManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_TaskRunner.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_TaskRunner.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_TaskManager;
}(Ext_util_TaskRunner);

export { Ext_util_TaskManager as default };