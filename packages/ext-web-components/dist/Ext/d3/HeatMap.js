import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg from '../../Ext/d3/svg/Svg';

var Ext_d3_HeatMap =
/*#__PURE__*/
function (_Ext_d3_svg_Svg) {
  _inheritsLoose(Ext_d3_HeatMap, _Ext_d3_svg_Svg);

  Ext_d3_HeatMap.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'axisLock', 'bind', 'border', 'bottom', 'centered', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'disabled', 'displayed', 'docked', 'draggable', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'instanceCls', 'interactions', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labels', 'left', 'legend', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'size', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'tiles', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'transitions', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'width', 'x', 'xAxis', 'xtype', 'y', 'yAxis', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_d3_HeatMap.EVENTS = function EVENTS() {
    return [{
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
      parameters: 'd3-heatmap'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'd3-heatmap,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
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
      parameters: 'd3-heatmap,event'
    }, {
      name: 'focusenter',
      parameters: 'd3-heatmap,event'
    }, {
      name: 'focusleave',
      parameters: 'd3-heatmap,event'
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
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'sceneresize',
      parameters: 'component,scene,size'
    }, {
      name: 'scenesetup',
      parameters: 'component,scene'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'd3-heatmap'
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

  Ext_d3_HeatMap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_HeatMap.PROPERTIES());
    return Ext_d3_svg_Svg.getProperties(properties);
  };

  Ext_d3_HeatMap.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_HeatMap.EVENTS());
    return Ext_d3_svg_Svg.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'd3-heatmap'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_d3_HeatMap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_svg_Svg.observedAttributes; //for (var property in Ext_d3_HeatMap.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_d3_HeatMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_HeatMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_HeatMap(properties, events) {
    return _Ext_d3_svg_Svg.call(this, properties.concat(Ext_d3_HeatMap.PROPERTIES()), events.concat(Ext_d3_HeatMap.EVENTS())) || this;
  }

  var _proto = Ext_d3_HeatMap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_svg_Svg.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_svg_Svg.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_HeatMap;
}(Ext_d3_svg_Svg);

export { Ext_d3_HeatMap as default };