import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days from '../../../Ext/calendar/panel/Days.js';

var Ext_calendar_panel_Week =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(Ext_calendar_panel_Week, _Ext_calendar_panel_D);

  Ext_calendar_panel_Week.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'addForm', 'alignSelf', 'allowFocusingDisabledChildren', 'allowSelection', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'compact', 'compactOptions', 'constrainAlign', 'contentEl', 'control', 'controller', 'controlStoreRange', 'data', 'dayHeader', 'dayHeaderFormat', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'displayOverlap', 'docked', 'draggable', 'droppable', 'editForm', 'endTime', 'eventDefaults', 'eventRelayers', 'firstDayOfWeek', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'gestureNavigation', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'highlightToday', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'resizeEvents', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'showNowMarker', 'standardButtons', 'startTime', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'tbar', 'timeFormat', 'timezoneOffset', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'view', 'viewModel', 'visibleDays', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_panel_Week.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,calendar-week,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'calendar-week,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'calendar-week'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
      parameters: 'calendar-week,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'calendar-week,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'calendar-week,context'
    }, {
      name: 'beforeeventresizestart',
      parameters: 'calendar-week,context'
    }, {
      name: 'beforeexpand',
      parameters: 'calendar-week'
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
      name: 'beforeresizedragstart',
      parameters: 'calendar-week,context'
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
      parameters: 'calendar-week'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'calendar-week,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'calendar-week'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,calendar-week,newActiveItem'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'drawerhide',
      parameters: 'calendar-week'
    }, {
      name: 'drawershow',
      parameters: 'calendar-week'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'eventadd',
      parameters: 'calendar-week,context'
    }, {
      name: 'eventdrop',
      parameters: 'calendar-week,context'
    }, {
      name: 'eventedit',
      parameters: 'calendar-week,context'
    }, {
      name: 'eventresize',
      parameters: 'calendar-week,context'
    }, {
      name: 'eventtap',
      parameters: 'calendar-week,context'
    }, {
      name: 'expand',
      parameters: 'calendar-week'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'calendar-week,event'
    }, {
      name: 'focusenter',
      parameters: 'calendar-week,event'
    }, {
      name: 'focusleave',
      parameters: 'calendar-week,event'
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
      name: 'move',
      parameters: 'calendar-week,item,toIndex,fromIndex'
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
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'remove',
      parameters: 'calendar-week,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'calendar-week,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'calendar-week,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'calendar-week,context'
    }, {
      name: 'resizedragend',
      parameters: 'calendar-week,context'
    }, {
      name: 'resizedragstart',
      parameters: 'calendar-week,context'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'calendar-week'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'validateeventadd',
      parameters: 'calendar-week,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'calendar-week,context'
    }, {
      name: 'validateeventedit',
      parameters: 'calendar-week,context'
    }, {
      name: 'validateeventresize',
      parameters: 'calendar-week,context'
    }, {
      name: 'valuechange',
      parameters: 'calendar-week,context'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_panel_Week.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_panel_Week.PROPERTIES());
    return Ext_calendar_panel_Days.getProperties(properties);
  };

  Ext_calendar_panel_Week.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_panel_Week.EVENTS());
    return Ext_calendar_panel_Days.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'calendar-week'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_panel_Week, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_D.observedAttributes; //for (var property in Ext_calendar_panel_Week.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_panel_Week.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_panel_Week.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Week(properties, events) {
    return _Ext_calendar_panel_D.call(this, properties.concat(Ext_calendar_panel_Week.PROPERTIES()), events.concat(Ext_calendar_panel_Week.EVENTS())) || this;
  }

  var _proto = Ext_calendar_panel_Week.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_D.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_D.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Week;
}(Ext_calendar_panel_Days);

export { Ext_calendar_panel_Week as default };