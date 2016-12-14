/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.modeloDepartamento.ModeloDepartamentoMainPanel', {
    extend: 'Ext.panel.Panel',
    controller: 'sacec.controller.modeloDepartamento.ModeloDepartamentoMainPanelController',
    alias: 'widget.sacec-view-modelo-departamento-main-panel',
    requires: [
        "sacec.view.modeloDepartamento.ModeloDepartamentoGrid",
        "sacec.view.modeloDepartamento.ModeloDepartamentoForm"
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-modelo-departamento-grid',
        region:'center',
        width: '70%'
    },{
        xtype: 'sacec-view-modelo-departamento-form',
        region:'east',
        width: '30%',
        collapsible: true,
        itemId: 'panelCollapsibleModeloDepartamento'
    }],

});


