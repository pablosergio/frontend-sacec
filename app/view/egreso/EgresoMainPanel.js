/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.egreso.EgresoMainPanel', {
    extend: 'Ext.panel.Panel',
    controller: 'sacec.controller.egreso.EgresoMainPanelController',
    alias: 'widget.sacec-view-egreso-main-panel',
    requires: [
        "sacec.view.egreso.EgresoForm",
        "sacec.view.egreso.EgresoGrid",
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-egreso-grid',
        region:'center',
        width: '65%'
    },{
        xtype: 'sacec-view-egreso-form',
        region:'east',
        width: '35%',
        collapsible: true,
        itemId: 'panelCollapsibleEgreso'
    }],

});


