import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotconfigformComponent extends Ext_pivot_plugin_configurator_Form {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotconfigform'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigform', ExtPivotconfigformComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigform', HTMLParsedElement.withParsedCallback(ExtPivotconfigformComponent))
