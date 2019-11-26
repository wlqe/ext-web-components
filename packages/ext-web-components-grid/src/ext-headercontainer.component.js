import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtHeadercontainerComponent extends Ext_grid_HeaderContainer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'headercontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-headercontainer', ExtHeadercontainerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-headercontainer', HTMLParsedElement.withParsedCallback(ExtHeadercontainerComponent))