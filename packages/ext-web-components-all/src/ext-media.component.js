import Ext_Media from './Ext/Media.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMediaComponent extends Ext_Media {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'media'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-media', ExtMediaComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMediaComponent))
