import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Abstract from '../../Ext/dataview/Abstract';

var Ext_dataview_Component =
/*#__PURE__*/
function (_Ext_dataview_Abstrac) {
  _inheritsLoose(Ext_dataview_Component, _Ext_dataview_Abstrac);

  Ext_dataview_Component.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'centered', 'cls', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inactiveChildTabIndex', 'inline', 'innerCls', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'pressedDelay', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_dataview_Component.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,componentdataview,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: ''
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
      name: 'beforestorechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforetofront',
      parameters: 'componentdataview'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'componentdataview,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'componentdataview,location'
    }, {
      name: 'childlongpress',
      parameters: 'componentdataview,location'
    }, {
      name: 'childmouseenter',
      parameters: 'componentdataview,location'
    }, {
      name: 'childmouseleave',
      parameters: 'componentdataview,location'
    }, {
      name: 'childsingletap',
      parameters: 'componentdataview,location'
    }, {
      name: 'childtap',
      parameters: 'componentdataview,location'
    }, {
      name: 'childtaphold',
      parameters: 'componentdataview,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'componentdataview,location'
    }, {
      name: 'childtouchend',
      parameters: 'componentdataview,location'
    }, {
      name: 'childtouchmove',
      parameters: 'componentdataview,location'
    }, {
      name: 'childtouchstart',
      parameters: 'componentdataview,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,componentdataview,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'componentdataview,records'
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
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'componentdataview,event'
    }, {
      name: 'focusenter',
      parameters: 'componentdataview,event'
    }, {
      name: 'focusleave',
      parameters: 'componentdataview,event'
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
      name: 'itemdoubletap',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'componentdataview,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'componentdataview,index,target,record,e'
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
      parameters: ''
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'navigate',
      parameters: 'componentdataview,to,from'
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
      name: 'refresh',
      parameters: 'componentdataview'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'componentdataview,item,rendered'
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
      parameters: 'componentdataview,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'componentdataview'
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

  Ext_dataview_Component.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dataview_Component.PROPERTIES());
    return Ext_dataview_Abstract.getProperties(properties);
  };

  Ext_dataview_Component.getEvents = function getEvents(events) {
    events = events.concat(Ext_dataview_Component.EVENTS());
    return Ext_dataview_Abstract.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'componentdataview'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_dataview_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_Abstrac.observedAttributes; //for (var property in Ext_dataview_Component.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_dataview_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dataview_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_Component(properties, events) {
    return _Ext_dataview_Abstrac.call(this, properties.concat(Ext_dataview_Component.PROPERTIES()), events.concat(Ext_dataview_Component.EVENTS())) || this;
  }

  var _proto = Ext_dataview_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_Component;
}(Ext_dataview_Abstract);

export { Ext_dataview_Component as default };