import Ext_pivot_cell_Group from './Ext/pivot/cell/Group'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotgridgroupcellComponent extends Ext_pivot_cell_Group {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotgridgroupcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridgroupcell', ExtPivotgridgroupcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridgroupcell', HTMLParsedElement.withParsedCallback(ExtPivotgridgroupcellComponent))
