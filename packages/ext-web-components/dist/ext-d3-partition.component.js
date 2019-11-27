import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_d3_hierarchy_partition_Partition from '@sencha/ext-runtime-base/dist/./Ext/d3/hierarchy/partition/Partition.js';
import Ext_d3_hierarchy_partition_Partition from './Ext/d3/hierarchy/partition/Partition.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCD3_partition =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(EWCD3_partition, _Ext_d3_hierarchy_par);

  function EWCD3_partition() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, [], []) || this;
    _this.xtype = 'd3-partition';
    return _this;
  }

  return EWCD3_partition;
}(Ext_d3_hierarchy_partition_Partition);

export { EWCD3_partition as default };
window.customElements.define('ext-d3-partition', HTMLParsedElement.withParsedCallback(EWCD3_partition));