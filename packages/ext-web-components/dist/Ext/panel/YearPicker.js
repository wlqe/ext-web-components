import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_BoundList from '../../Ext/dataview/BoundList';

var Ext_panel_YearPicker =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(Ext_panel_YearPicker, _Ext_dataview_BoundLi);

  Ext_panel_YearPicker.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_panel_YearPicker.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,yearpicker,oldActiveItem'
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
      name: 'beforegroupcollapse',
      parameters: 'yearpicker,group'
    }, {
      name: 'beforegroupexpand',
      parameters: 'yearpicker,group'
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
      parameters: 'yearpicker'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'yearpicker,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'yearpicker,location'
    }, {
      name: 'childlongpress',
      parameters: 'yearpicker,location'
    }, {
      name: 'childmouseenter',
      parameters: 'yearpicker,location'
    }, {
      name: 'childmouseleave',
      parameters: 'yearpicker,location'
    }, {
      name: 'childsingletap',
      parameters: 'yearpicker,location'
    }, {
      name: 'childtap',
      parameters: 'yearpicker,location'
    }, {
      name: 'childtaphold',
      parameters: 'yearpicker,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'yearpicker,location'
    }, {
      name: 'childtouchend',
      parameters: 'yearpicker,location'
    }, {
      name: 'childtouchmove',
      parameters: 'yearpicker,location'
    }, {
      name: 'childtouchstart',
      parameters: 'yearpicker,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,yearpicker,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'yearpicker,records'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'disclose',
      parameters: 'list,record,target,index,event'
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
      parameters: 'yearpicker,event'
    }, {
      name: 'focusenter',
      parameters: 'yearpicker,event'
    }, {
      name: 'focusleave',
      parameters: 'yearpicker,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'groupcollapse',
      parameters: 'yearpicker,group'
    }, {
      name: 'groupexpand',
      parameters: 'yearpicker,group'
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
      name: 'itemaction',
      parameters: 'yearpicker,index,record,action'
    }, {
      name: 'itemdoubletap',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'yearpicker,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'yearpicker,index,target,record,e'
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
      parameters: 'yearpicker,to,from'
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
      parameters: 'yearpicker'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'yearpicker,item,rendered'
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
      parameters: 'yearpicker,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'yearpicker'
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

  Ext_panel_YearPicker.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_panel_YearPicker.PROPERTIES());
    return Ext_dataview_BoundList.getProperties(properties);
  };

  Ext_panel_YearPicker.getEvents = function getEvents(events) {
    events = events.concat(Ext_panel_YearPicker.EVENTS());
    return Ext_dataview_BoundList.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'yearpicker'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_panel_YearPicker, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_BoundLi.observedAttributes; //for (var property in Ext_panel_YearPicker.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_panel_YearPicker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_panel_YearPicker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_YearPicker(properties, events) {
    return _Ext_dataview_BoundLi.call(this, properties.concat(Ext_panel_YearPicker.PROPERTIES()), events.concat(Ext_panel_YearPicker.EVENTS())) || this;
  }

  var _proto = Ext_panel_YearPicker.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_BoundLi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_BoundLi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_YearPicker;
}(Ext_dataview_BoundList);

export { Ext_panel_YearPicker as default };