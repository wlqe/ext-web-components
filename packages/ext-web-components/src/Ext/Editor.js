import Ext_Container from '../Ext/Container';

export default class Ext_Editor extends Ext_Container {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'alignment',
'alignSelf',
'allowBlur',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoSize',
'axisLock',
'bind',
'bodyCls',
'border',
'bottom',
'cancelOnClear',
'cancelOnEsc',
'cardSwitchAnimation',
'centered',
'cls',
'completeOnEnter',
'constrain',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultType',
'disabled',
'displayed',
'docked',
'draggable',
'field',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideEl',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'ignoreNoChange',
'inactiveChildTabIndex',
'innerCls',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'left',
'listeners',
'manageBorders',
'margin',
'masked',
'matchFont',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'offset',
'padding',
'parentEl',
'plugins',
'publishes',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'resetFocusPosition',
'revertInvalid',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'stateful',
'statefulDefaults',
'stateId',
'style',
'swallowKeys',
'tabIndex',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'updateEl',
'userCls',
'userSelectable',
'value',
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
{name:'activate',parameters:'newActiveItem,editor,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'editor,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecomplete',parameters:'editor,value,startValue'},
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
{name:'beforestartedit',parameters:'editor,boundEl,value'},
{name:'beforetofront',parameters:'editor'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'editor,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'canceledit',parameters:'editor,value,startValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'complete',parameters:'editor,value,startValue'},
{name:'deactivate',parameters:'oldActiveItem,editor,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'editor,event'},
{name:'focusenter',parameters:'editor,event'},
{name:'focusleave',parameters:'editor,event'},
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
{name:'move',parameters:'editor,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'editor,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'editor,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'specialkey',parameters:'editor,field,event'},
{name:'startedit',parameters:'editor,boundEl,value'},
{name:'tofront',parameters:'editor'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_Editor.PROPERTIES());
        return Ext_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Editor.EVENTS());
        return Ext_Container.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'editor'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_Editor.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_Editor.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_Editor.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_Editor.PROPERTIES()),
            events.concat(Ext_Editor.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
