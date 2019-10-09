import Ext_field_trigger_Expand from '../../../Ext/field/trigger/Expand';

export default class Ext_field_trigger_Time extends Ext_field_trigger_Expand {

    static PROPERTIES() { return [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'bind',
'border',
'cls',
'constrainAlign',
'controller',
'defaultListenerScope',
'disabled',
'field',
'flex',
'floated',
'focusCls',
'focusOnTap',
'group',
'handler',
'height',
'hidden',
'hideMode',
'iconCls',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'listeners',
'margin',
'name',
'nameable',
'plugins',
'publishes',
'reference',
'relative',
'renderTo',
'repeat',
'ripple',
'scope',
'session',
'shadow',
'shareableName',
'shim',
'side',
'style',
'toFrontOnShow',
'touchAction',
'translatable',
'triggers',
'twoWayBindable',
'ui',
'userCls',
'viewModel',
'width',
'x',
'y',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'timetrigger'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'timetrigger,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'timetrigger,event'},
{name:'focusenter',parameters:'timetrigger,event'},
{name:'focusleave',parameters:'timetrigger,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'timetrigger'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_field_trigger_Time.PROPERTIES());
        return Ext_field_trigger_Expand.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_trigger_Time.EVENTS());
        return Ext_field_trigger_Expand.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'timetrigger'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_field_trigger_Time.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_field_trigger_Time.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_field_trigger_Time.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_field_trigger_Time.PROPERTIES()),
            events.concat(Ext_field_trigger_Time.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
