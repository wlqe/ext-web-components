//import Ext_grid_BooleanColumn from '@sencha/ext-runtime-base/dist/./Ext/grid/BooleanColumn.js';
import Ext_grid_BooleanColumn from './Ext/grid/BooleanColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCBooleancolumn extends Ext_grid_BooleanColumn {
    constructor() {
        super ([], []);
        this.xtype = 'booleancolumn';
    }

}
window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));
