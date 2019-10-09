import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtColorselectorComponent extends Ext_ux_colorpick_Selector {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'colorselector'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorselector', ExtColorselectorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorselector', HTMLParsedElement.withParsedCallback(ExtColorselectorComponent))
