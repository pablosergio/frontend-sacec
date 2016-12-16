/**
 * Created by palvarado on 12/12/2016.
 */
/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define( 'sacec.view.deuda.DeudaExpensasMainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.sacec-view-deuda-expensas-main-panel',
    requires: [
        "sacec.view.deuda.DeudaExpensasGrid",
    ],
    title: 'Border Layout',
    layout: 'border',
    items: [{
        xtype: 'sacec-view-deuda-expensas-grid',
        region:'center',
        width: '100%'
    }],

});


