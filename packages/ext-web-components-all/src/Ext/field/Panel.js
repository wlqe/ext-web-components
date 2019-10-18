import Ext_Panel from '../../Ext/Panel.js';

export default class Ext_field_Panel extends Ext_Panel {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'alignSelf',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'anchor',
'anchorPosition',
'api',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoSize',
'axisLock',
'baseParams',
'bbar',
'bind',
'bodyBorder',
'bodyCls',
'bodyPadding',
'bodyStyle',
'border',
'bottom',
'bubbleDirty',
'buttonAlign',
'buttons',
'buttonToolbar',
'cardSwitchAnimation',
'centered',
'closable',
'closeAction',
'closeToolText',
'cls',
'collapsed',
'collapsible',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultToolWeights',
'defaultType',
'dirty',
'disabled',
'displayed',
'docked',
'draggable',
'fieldSeparators',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'header',
'headerPosition',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'icon',
'iconAlign',
'iconCls',
'id',
'inactiveChildTabIndex',
'innerCls',
'inputBorders',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'lbar',
'left',
'listeners',
'manageBorders',
'margin',
'masked',
'maxHeight',
'maxWidth',
'minButtonWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'padding',
'paramOrder',
'paramsAsHash',
'plugins',
'publishes',
'rbar',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'resetFocusPosition',
'resizable',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'standardButtons',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'tbar',
'timeout',
'title',
'titleAlign',
'titleCollapse',
'toFrontOnShow',
'toolDefaults',
'tools',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'url',
'userCls',
'userSelectable',
'viewModel',
'weight',
'weighted',
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
{name:'activate',parameters:'newActiveItem,fieldpanel,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'fieldpanel,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'fieldpanel'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'fieldpanel'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'fieldpanel,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'fieldpanel'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'fieldpanel,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'fieldpanel'},
{name:'deactivate',parameters:'oldActiveItem,fieldpanel,newActiveItem'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'fieldpanel,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'fieldpanel'},
{name:'drawershow',parameters:'fieldpanel'},
{name:'erased',parameters:'sender'},
{name:'exception',parameters:'fieldpanel,result'},
{name:'expand',parameters:'fieldpanel'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'fieldpanel,event'},
{name:'focusenter',parameters:'fieldpanel,event'},
{name:'focusleave',parameters:'fieldpanel,event'},
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
{name:'move',parameters:'fieldpanel,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'fieldpanel,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'fieldpanel,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'fieldpanel,context'},
{name:'resizedragcancel',parameters:'fieldpanel,context'},
{name:'resizedragend',parameters:'fieldpanel,context'},
{name:'resizedragstart',parameters:'fieldpanel,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'fieldpanel'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_field_Panel.PROPERTIES());
        return Ext_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_Panel.EVENTS());
        return Ext_Panel.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'fieldpanel'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_field_Panel.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_field_Panel.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_field_Panel.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_field_Panel.PROPERTIES()),
            events.concat(Ext_field_Panel.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
