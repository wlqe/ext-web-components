import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtChipviewComponent =
/*#__PURE__*/
function (_Ext_dataview_ChipVie) {
  _inheritsLoose(ExtChipviewComponent, _Ext_dataview_ChipVie);

  function ExtChipviewComponent() {
    var _this;

    _this = _Ext_dataview_ChipVie.call(this, [], []) || this;
    _this.xtype = 'chipview';
    return _this;
  }

  return ExtChipviewComponent;
}(Ext_dataview_ChipView); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chipview', ExtChipviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(ExtChipviewComponent));