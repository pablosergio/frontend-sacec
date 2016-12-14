/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.departamento.DepartamentoMainPanel', {
    extend: 'Ext.panel.Panel',
    controller: 'sacec.controller.departamento.DepartamentoMainPanelController',
    alias: 'widget.sacec-view-departamento-main-panel',
    requires: [
        "sacec.view.departamento.DepartamentoGrid",
        "sacec.view.departamento.DepartamentoForm"
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-departamento-grid',
        region:'center',
        width: '70%'
    },{
        xtype: 'sacec-view-departamento-form',
        region:'east',
        width: '30%',
        collapsible: true,
        itemId: 'panelCollapsibleDepartamento'
    }],

});


