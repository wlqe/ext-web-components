//import Ext_ProgressBarWidget from '@sencha/ext-runtime-base/dist/./Ext/ProgressBarWidget.js';
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCProgressbarwidget extends Ext_ProgressBarWidget {
    constructor() {
        super ([], []);
        this.xtype = 'progressbarwidget';
    }

}
window.customElements.define('ext-progressbarwidget', HTMLParsedElement.withParsedCallback(EWCProgressbarwidget));
