import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_fx_target_Sprite from '../../../Ext/fx/target/Sprite.js';

var Ext_fx_target_CompositeSprite = /*#__PURE__*/function (_Ext_fx_target_Sprite) {
  _inheritsLoose(Ext_fx_target_CompositeSprite, _Ext_fx_target_Sprite);

  var _super = _createSuper(Ext_fx_target_CompositeSprite);

  Ext_fx_target_CompositeSprite.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_target_CompositeSprite.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_target_CompositeSprite.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_target_CompositeSprite.PROPERTIES());
    return Ext_fx_target_Sprite.getProperties(properties);
  };

  Ext_fx_target_CompositeSprite.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_target_CompositeSprite.EVENTS());
    return Ext_fx_target_Sprite.getEvents(events);
  };

  _createClass(Ext_fx_target_CompositeSprite, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_target_Sprite.observedAttributes;
      Ext_fx_target_CompositeSprite.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_target_CompositeSprite.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_target_CompositeSprite(properties, events) {
    return _Ext_fx_target_Sprite.call(this, properties.concat(Ext_fx_target_CompositeSprite.PROPERTIES()), events.concat(Ext_fx_target_CompositeSprite.EVENTS())) || this;
  }

  var _proto = Ext_fx_target_CompositeSprite.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_target_Sprite.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_target_Sprite.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_target_CompositeSprite;
}(Ext_fx_target_Sprite);

export { Ext_fx_target_CompositeSprite as default };