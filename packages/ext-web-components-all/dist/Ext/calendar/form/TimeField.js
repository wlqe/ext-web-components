import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Select from '../../../Ext/field/Select.js';

var Ext_calendar_form_TimeField =
/*#__PURE__*/
function (_Ext_field_Select) {
  _inheritsLoose(Ext_calendar_form_TimeField, _Ext_field_Select);

  Ext_calendar_form_TimeField.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alignTarget', 'alwaysOnTop', 'animateUnderline', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoFocus', 'autoFocusLast', 'autoHideInputMask', 'autoLoadOnValue', 'autoSelect', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'chipView', 'clearable', 'cls', 'collapseOnSelect', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'delimiter', 'dirty', 'disabled', 'displayed', 'displayField', 'displayTpl', 'docked', 'draggable', 'edgePicker', 'editable', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'flex', 'floated', 'floatedPicker', 'floatedPickerAlign', 'focusCls', 'focusTrap', 'forceSelection', 'fullscreen', 'height', 'hidden', 'hiddenName', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideTrigger', 'html', 'id', 'inline', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemCls', 'itemId', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'matchFieldWidth', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multiSelect', 'name', 'nameable', 'options', 'padding', 'parseValidator', 'pattern', 'picker', 'pickerSlotAlign', 'placeholder', 'plugins', 'publishes', 'readOnly', 'record', 'recordCreator', 'recordCreatorScope', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'selection', 'selectOnTab', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'store', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'valueCollection', 'valueField', 'valueNotFoundText', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_form_TimeField.EVENTS = function EVENTS() {
    return [{
      name: 'action',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'calendar-timefield'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'change',
      parameters: 'calendar-timefield,newValue,oldValue'
    }, {
      name: 'clearicontap',
      parameters: 'calendar-timefield,input,e'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'collapse',
      parameters: 'field'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'calendar-timefield,dirty'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'calendar-timefield,error'
    }, {
      name: 'expand',
      parameters: 'field'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'focusenter',
      parameters: 'calendar-timefield,event'
    }, {
      name: 'focusleave',
      parameters: 'calendar-timefield,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'keydown',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'keyup',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'mousedown',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'paste',
      parameters: 'calendar-timefield,e'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'calendar-timefield,newValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'calendar-timefield'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_form_TimeField.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_form_TimeField.PROPERTIES());
    return Ext_field_Select.getProperties(properties);
  };

  Ext_calendar_form_TimeField.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_form_TimeField.EVENTS());
    return Ext_field_Select.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'calendar-timefield'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_form_TimeField, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Select.observedAttributes; //for (var property in Ext_calendar_form_TimeField.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_form_TimeField.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_form_TimeField.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_TimeField(properties, events) {
    return _Ext_field_Select.call(this, properties.concat(Ext_calendar_form_TimeField.PROPERTIES()), events.concat(Ext_calendar_form_TimeField.EVENTS())) || this;
  }

  var _proto = Ext_calendar_form_TimeField.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Select.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Select.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_TimeField;
}(Ext_field_Select);

export { Ext_calendar_form_TimeField as default };