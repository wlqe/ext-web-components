import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRoweditorcellComponent extends Ext_grid_rowedit_Cell {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'roweditorcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorcell', ExtRoweditorcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditorcell', HTMLParsedElement.withParsedCallback(ExtRoweditorcellComponent))
