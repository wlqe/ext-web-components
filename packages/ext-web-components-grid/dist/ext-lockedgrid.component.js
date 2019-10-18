import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtLockedgridComponent =
/*#__PURE__*/
function (_Ext_grid_LockedGrid) {
  _inheritsLoose(ExtLockedgridComponent, _Ext_grid_LockedGrid);

  function ExtLockedgridComponent() {
    var _this;

    _this = _Ext_grid_LockedGrid.call(this, [], []) || this;
    _this.xtype = 'lockedgrid';
    return _this;
  }

  return ExtLockedgridComponent;
}(Ext_grid_LockedGrid); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgrid', ExtLockedgridComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgridComponent));