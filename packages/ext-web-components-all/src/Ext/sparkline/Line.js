import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

export default class Ext_sparkline_Line extends Ext_sparkline_Base {

    static PROPERTIES() { return [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'axisLock',
'bind',
'border',
'bottom',
'centered',
'chartRangeMax',
'chartRangeMaxX',
'chartRangeMin',
'chartRangeMinX',
'cls',
'constrainAlign',
'contentEl',
'controller',
'data',
'defaultListenerScope',
'disabled',
'disableTooltips',
'displayed',
'docked',
'draggable',
'drawNormalOnTop',
'fillColor',
'flex',
'floated',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'highlightColor',
'highlightLighten',
'highlightLineColor',
'highlightSpotColor',
'html',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'left',
'lineColor',
'lineWidth',
'listeners',
'margin',
'maxHeight',
'maxSpotColor',
'maxWidth',
'minHeight',
'minSpotColor',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'normalRangeColor',
'normalRangeMax',
'normalRangeMin',
'padding',
'plugins',
'publishes',
'record',
'reference',
'relative',
'renderTo',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'spotColor',
'spotRadius',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'tipTpl',
'toFrontOnShow',
'tooltip',
'tooltipPrefix',
'tooltipSkipNull',
'tooltipSuffix',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'values',
'valueSpots',
'viewModel',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'sparklineline'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'sparklineline,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'sparklineline,event'},
{name:'focusenter',parameters:'sparklineline,event'},
{name:'focusleave',parameters:'sparklineline,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'sparklineline'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_sparkline_Line.PROPERTIES());
        return Ext_sparkline_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_sparkline_Line.EVENTS());
        return Ext_sparkline_Base.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'sparklineline'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_sparkline_Line.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_sparkline_Line.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_sparkline_Line.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_sparkline_Line.PROPERTIES()),
            events.concat(Ext_sparkline_Line.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
