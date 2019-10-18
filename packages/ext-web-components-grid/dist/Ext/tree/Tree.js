import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid from '../../Ext/grid/Grid.js';

var Ext_tree_Tree =
/*#__PURE__*/
function (_Ext_grid_Grid) {
  _inheritsLoose(Ext_tree_Tree, _Ext_grid_Grid);

  Ext_tree_Tree.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'columnLines', 'columnMenu', 'columnResize', 'columns', 'columnsMenuItem', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'enableColumnMove', 'expanderFirst', 'expanderOnly', 'flex', 'floated', 'focusableContainer', 'focusCls', 'folderSort', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideHeaders', 'hideMode', 'hideOnMaskTap', 'hideScrollbar', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'multiColumnSort', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'rowNumbers', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'selectOnExpander', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'singleExpand', 'sortable', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'title', 'titleBar', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_tree_Tree.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,tree,oldActiveItem'
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
      name: 'beforecheckchange',
      parameters: 'tree,checked,current,record,e'
    }, {
      name: 'beforecomplete',
      parameters: 'editor,value,startValue,The'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeedit',
      parameters: 'sender,location'
    }, {
      name: 'beforegroupcollapse',
      parameters: 'tree,group'
    }, {
      name: 'beforegroupexpand',
      parameters: 'tree,group'
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
      name: 'beforeload',
      parameters: 'store,operation'
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
      name: 'beforenodecollapse',
      parameters: 'node,record'
    }, {
      name: 'beforenodeexpand',
      parameters: 'row,record'
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
      name: 'beforeselectionextend',
      parameters: 'grid,An,extension'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestartedit',
      parameters: 'editor,boundEl,value,The'
    }, {
      name: 'beforestorechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforetofront',
      parameters: 'tree'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'tree,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'canceledit',
      parameters: 'editor,value,startValue'
    }, {
      name: 'cellselection',
      parameters: 'grid,selection'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'checkchange',
      parameters: 'cell,checked,record,e'
    }, {
      name: 'childdoubletap',
      parameters: 'tree,location'
    }, {
      name: 'childlongpress',
      parameters: 'tree,location'
    }, {
      name: 'childmouseenter',
      parameters: 'tree,location'
    }, {
      name: 'childmouseleave',
      parameters: 'tree,location'
    }, {
      name: 'childsingletap',
      parameters: 'tree,location'
    }, {
      name: 'childtap',
      parameters: 'tree,location'
    }, {
      name: 'childtaphold',
      parameters: 'tree,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'tree,location'
    }, {
      name: 'childtouchend',
      parameters: 'tree,location'
    }, {
      name: 'childtouchmove',
      parameters: 'tree,location'
    }, {
      name: 'childtouchstart',
      parameters: 'tree,location'
    }, {
      name: 'columnadd',
      parameters: 'tree,column,index'
    }, {
      name: 'columnhide',
      parameters: 'tree,column'
    }, {
      name: 'columnmenucreated',
      parameters: 'grid,column,menu'
    }, {
      name: 'columnmove',
      parameters: 'tree,column,fromIndex,toIndex'
    }, {
      name: 'columnremove',
      parameters: 'tree,column'
    }, {
      name: 'columnresize',
      parameters: 'tree,column,width'
    }, {
      name: 'columnselection',
      parameters: 'grid,selection'
    }, {
      name: 'columnshow',
      parameters: 'tree,column'
    }, {
      name: 'columnsort',
      parameters: 'tree,column,direction'
    }, {
      name: 'complete',
      parameters: 'editor,value,startValue,The'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,tree,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'tree,records'
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
      name: 'edit',
      parameters: 'sender,location'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'tree,event'
    }, {
      name: 'focusenter',
      parameters: 'tree,event'
    }, {
      name: 'focusleave',
      parameters: 'tree,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'groupcollapse',
      parameters: 'tree,group'
    }, {
      name: 'groupexpand',
      parameters: 'tree,group'
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
      parameters: 'tree,index,record,action'
    }, {
      name: 'itemdoubletap',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'tree,index,target,record,e'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'load',
      parameters: 'tree,records,successful,operation,node'
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
      parameters: 'tree,to,from'
    }, {
      name: 'nodecollapse',
      parameters: 'node,record'
    }, {
      name: 'nodeexpand',
      parameters: 'row,record'
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
      parameters: 'tree'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'tree,item,rendered'
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
      parameters: 'tree,selected'
    }, {
      name: 'selectionextenderdrag',
      parameters: 'grid,An,extension'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'specialkey',
      parameters: 'editor,field,event'
    }, {
      name: 'startedit',
      parameters: 'editor,boundEl,value,The'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'tree'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'validateedit',
      parameters: 'sender,location'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_tree_Tree.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_tree_Tree.PROPERTIES());
    return Ext_grid_Grid.getProperties(properties);
  };

  Ext_tree_Tree.getEvents = function getEvents(events) {
    events = events.concat(Ext_tree_Tree.EVENTS());
    return Ext_grid_Grid.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'tree'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_tree_Tree, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_Grid.observedAttributes; //for (var property in Ext_tree_Tree.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_tree_Tree.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_tree_Tree.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tree_Tree(properties, events) {
    return _Ext_grid_Grid.call(this, properties.concat(Ext_tree_Tree.PROPERTIES()), events.concat(Ext_tree_Tree.EVENTS())) || this;
  }

  var _proto = Ext_tree_Tree.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_Grid.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_Grid.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tree_Tree;
}(Ext_grid_Grid);

export { Ext_tree_Tree as default };