import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtBooleancellComponent extends Ext_grid_cell_Boolean {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'booleancell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancell', ExtBooleancellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(ExtBooleancellComponent))
