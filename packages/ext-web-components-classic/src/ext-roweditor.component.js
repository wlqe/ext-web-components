//import Ext_grid_RowEditor from '@sencha/ext-runtime-base/dist/./Ext/grid/RowEditor.js';
import Ext_grid_RowEditor from './Ext/grid/RowEditor.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditor extends Ext_grid_RowEditor {
    constructor() {
        super ([], []);
        this.xtype = 'roweditor';
    }

}
window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
