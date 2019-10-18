import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtLockedgridComponent extends Ext_grid_LockedGrid {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'lockedgrid'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgrid', ExtLockedgridComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgridComponent))
