import Ext_dataview_SimpleListItem_Component from '../../Ext/dataview/SimpleListItem';

export default class Ext_dataview_ListItemPlaceholder_Component extends Ext_dataview_SimpleListItem_Component {
//events
//configs

static XTYPE() {return 'listitemplaceholder'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_dataview_ListItemPlaceholder_Component.METHODS(),
        Ext_dataview_ListItemPlaceholder_Component.XTYPE(),
        Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT(),
        Ext_dataview_ListItemPlaceholder_Component.EVENTS()
    )
    this.XTYPE = Ext_dataview_ListItemPlaceholder_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_dataview_ListItemPlaceholder_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_ListItemPlaceholder_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-listitemplaceholder', Ext_dataview_ListItemPlaceholder_Component);
  });
})();
