import Ext_NestedList from './Ext/NestedList.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtNestedlistComponent extends Ext_NestedList {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'nestedlist'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-nestedlist', ExtNestedlistComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(ExtNestedlistComponent))
