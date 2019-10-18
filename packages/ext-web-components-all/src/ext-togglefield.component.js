import Ext_form_Toggle from './Ext/form/Toggle.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTogglefieldComponent extends Ext_form_Toggle {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'togglefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-togglefield', ExtTogglefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(ExtTogglefieldComponent))
