import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_List from '../../Ext/dataview/List.js';

var Ext_dataview_BoundList =
/*#__PURE__*/
function (_Ext_dataview_List) {
  _inheritsLoose(Ext_dataview_BoundList, _Ext_dataview_List);

  Ext_dataview_BoundList.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_dataview_BoundList.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,boundlist,oldActiveItem'
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
      parameters: 'boundlist,group'
    }, {
      name: 'beforegroupexpand',
      parameters: 'boundlist,group'
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
      parameters: 'boundlist'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'boundlist,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'boundlist,location'
    }, {
      name: 'childlongpress',
      parameters: 'boundlist,location'
    }, {
      name: 'childmouseenter',
      parameters: 'boundlist,location'
    }, {
      name: 'childmouseleave',
      parameters: 'boundlist,location'
    }, {
      name: 'childsingletap',
      parameters: 'boundlist,location'
    }, {
      name: 'childtap',
      parameters: 'boundlist,location'
    }, {
      name: 'childtaphold',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchend',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchmove',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchstart',
      parameters: 'boundlist,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,boundlist,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'boundlist,records'
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
      parameters: 'boundlist,event'
    }, {
      name: 'focusenter',
      parameters: 'boundlist,event'
    }, {
      name: 'focusleave',
      parameters: 'boundlist,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'groupcollapse',
      parameters: 'boundlist,group'
    }, {
      name: 'groupexpand',
      parameters: 'boundlist,group'
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
      parameters: 'boundlist,index,record,action'
    }, {
      name: 'itemdoubletap',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'boundlist,index,target,record,e'
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
      parameters: 'boundlist,to,from'
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
      parameters: 'boundlist'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'boundlist,item,rendered'
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
      parameters: 'boundlist,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'boundlist'
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

  Ext_dataview_BoundList.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dataview_BoundList.PROPERTIES());
    return Ext_dataview_List.getProperties(properties);
  };

  Ext_dataview_BoundList.getEvents = function getEvents(events) {
    events = events.concat(Ext_dataview_BoundList.EVENTS());
    return Ext_dataview_List.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'boundlist'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_dataview_BoundList, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_List.observedAttributes; //for (var property in Ext_dataview_BoundList.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_dataview_BoundList.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dataview_BoundList.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_BoundList(properties, events) {
    return _Ext_dataview_List.call(this, properties.concat(Ext_dataview_BoundList.PROPERTIES()), events.concat(Ext_dataview_BoundList.EVENTS())) || this;
  }

  var _proto = Ext_dataview_BoundList.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_List.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_List.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_BoundList;
}(Ext_dataview_List);

export { Ext_dataview_BoundList as default };