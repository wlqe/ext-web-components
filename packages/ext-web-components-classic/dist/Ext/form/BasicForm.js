import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_Observable from '../../Ext/util/Observable.js';

var Ext_form_BasicForm = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Ext_form_BasicForm, _Ext_util_Observable);

  var _super = _createSuper(Ext_form_BasicForm);

  Ext_form_BasicForm.PROPERTIES = function PROPERTIES() {
    return ['api', 'baseParams', 'errorReader', 'jsonSubmit', 'listeners', 'metadata', 'method', 'paramOrder', 'paramsAsHash', 'reader', 'standardSubmit', 'timeout', 'trackResetOnLoad', 'url', 'waitMsgTarget', 'waitTitle'];
  };

  Ext_form_BasicForm.EVENTS = function EVENTS() {
    return [{
      name: 'actioncomplete',
      parameters: 'sender,action'
    }, {
      name: 'actionfailed',
      parameters: 'sender,action'
    }, {
      name: 'beforeaction',
      parameters: 'sender,action'
    }, {
      name: 'dirtychange',
      parameters: 'sender,dirty'
    }, {
      name: 'errorchange',
      parameters: 'sender'
    }, {
      name: 'validitychange',
      parameters: 'sender,valid'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_BasicForm.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_BasicForm.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Ext_form_BasicForm.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_BasicForm.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  _createClass(Ext_form_BasicForm, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Ext_form_BasicForm.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_BasicForm.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_BasicForm(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Ext_form_BasicForm.PROPERTIES()), events.concat(Ext_form_BasicForm.EVENTS())) || this;
  }

  var _proto = Ext_form_BasicForm.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_BasicForm;
}(Ext_util_Observable);

export { Ext_form_BasicForm as default };