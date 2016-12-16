/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.pago.PagoMainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.sacec-view-pago-main-panel',
    requires: [
        "sacec.view.pago.PagoGrid",
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-pago-grid',
        region:'center',
        width: '100%'
    }],

});


