/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.propietario.PropietarioMainPanel', {
    extend: 'Ext.panel.Panel',
    //controller: 'sacec.controller.propietario.PropietarioMainPanelController',
    alias: 'widget.sacec-view-propietario-main-panel',
    requires: [
        "sacec.view.propietario.PropietarioGrid",
        //"sacec.view.propietario.PropietarioForm"
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-propietario-grid',
        region:'center',
        width: '100%'
    }/*,{
        xtype: 'sacec-view-propietario-form',
        region:'east',
        width: '45%',
        collapsible: true,
        itemId: 'panelCollapsiblePropietario'
    }*/],

});


