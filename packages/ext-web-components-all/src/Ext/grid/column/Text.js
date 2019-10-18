import Ext_grid_column_Column from '../../../Ext/grid/column/Column.js';

export default class Ext_grid_column_Text extends Ext_grid_column_Column {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'align',
'alignSelf',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoSize',
'axisLock',
'bind',
'bodyCls',
'border',
'bottom',
'cardSwitchAnimation',
'cell',
'centered',
'cls',
'columns',
'computedWidth',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'dataIndex',
'defaultColumnUI',
'defaultEditor',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultToolWeights',
'defaultType',
'defaultWidth',
'depends',
'disabled',
'displayed',
'docked',
'draggable',
'editable',
'editor',
'editorDefaults',
'exportRenderer',
'exportStyle',
'exportSummaryRenderer',
'filter',
'flex',
'floated',
'focusableContainer',
'focusCls',
'formatter',
'fullscreen',
'groupable',
'grouper',
'groupHeaderTpl',
'height',
'hidden',
'hideable',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'hideShowMenuItem',
'html',
'id',
'ignore',
'ignoreExport',
'inactiveChildTabIndex',
'innerCls',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'left',
'listeners',
'locked',
'manageBorders',
'margin',
'masked',
'maxHeight',
'maxWidth',
'menu',
'menuDisabled',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'padding',
'plugins',
'publishes',
'record',
'reference',
'referenceHolder',
'relative',
'renderer',
'renderTo',
'reserveScrollbar',
'resetFocusPosition',
'resizable',
'right',
'ripple',
'scope',
'scratchCell',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'sortable',
'sorter',
'stateful',
'statefulDefaults',
'stateId',
'style',
'summary',
'summaryCell',
'summaryDataIndex',
'summaryFormatter',
'summaryRenderer',
'tabIndex',
'text',
'toFrontOnShow',
'toolDefaults',
'tools',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'verticalOverflow',
'viewModel',
'weight',
'weighted',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'activate',parameters:'newActiveItem,textcolumn,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'textcolumn,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'textcolumn'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'textcolumn,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,textcolumn,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'textcolumn,event'},
{name:'focusenter',parameters:'textcolumn,event'},
{name:'focusleave',parameters:'textcolumn,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'textcolumn,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'textcolumn,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'textcolumn,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'textcolumn'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_column_Text.PROPERTIES());
        return Ext_grid_column_Column.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_column_Text.EVENTS());
        return Ext_grid_column_Column.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'textcolumn'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_grid_column_Text.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_column_Text.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_column_Text.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_column_Text.PROPERTIES()),
            events.concat(Ext_grid_column_Text.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
