import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_desktop_Desktop from '@sencha/ext-runtime-base/dist/./Ext/ux/desktop/Desktop.js';
import Ext_ux_desktop_Desktop from './Ext/ux/desktop/Desktop.js';
import ElementParser from './ElementParser.js';

var EWCDesktop =
/*#__PURE__*/
function (_Ext_ux_desktop_Deskt) {
  _inheritsLoose(EWCDesktop, _Ext_ux_desktop_Deskt);

  function EWCDesktop() {
    var _this;

    _this = _Ext_ux_desktop_Deskt.call(this, [], []) || this;
    _this.xtype = 'desktop';
    return _this;
  }

  return EWCDesktop;
}(Ext_ux_desktop_Desktop);

export { EWCDesktop as default };
window.customElements.define('ext-desktop', ElementParser.withParsedCallback(EWCDesktop));