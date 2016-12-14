/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.estructuraTarifaria.EstructuraTarifariaMainPanel', {
    extend: 'Ext.panel.Panel',
    controller: 'sacec.controller.estructuraTarifaria.EstructuraTarifariaMainPanelController',
    alias: 'widget.sacec-view-estructura-tarifaria-main-panel',
    requires: [
        "sacec.view.estructuraTarifaria.EstructuraTarifariaGrid",
        "sacec.view.estructuraTarifaria.EstructuraTarifariaForm"
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-estructura-tarifaria-grid',
        region:'center',
        width: '70%'
    },{
        xtype: 'sacec-view-estructura-tarifaria-form',
        region:'east',
        width: '30%',
        collapsible: true,
        itemId: 'panelCollapsibleEstructuraTarifaria'
    }],

});


