import Ext_Component_Component from '../../Ext/Component';

export default class Ext_d3_ComponentBase_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_d3_ComponentBase_Component.METHODS(),
        Ext_d3_ComponentBase_Component.XTYPE(),
        Ext_d3_ComponentBase_Component.PROPERTIESOBJECT(),
        Ext_d3_ComponentBase_Component.EVENTS()
    )
    this.XTYPE = Ext_d3_ComponentBase_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_ComponentBase_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_d3_ComponentBase_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_ComponentBase_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
