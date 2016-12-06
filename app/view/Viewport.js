/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.view.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'sacec.view.Header',
        'sacec.view.Footer',
        'sacec.view.MainPanel',
        'sacec.view.menu.Menu'
    ],

    layout: {
        type: 'border'
    },

  initComponent: function() {
    Ext.applyIf(this, {
        items: [
            {
                xtype: 'sacec-view-header',
                region: 'north'
            },
            {
                xtype: 'sacec-view-footer',
                region: 'south',
            },
            {
                region: 'center',
                xtype: 'sacec-view-mainPanel',
            }]
    });
    return this.callParent(arguments);
  }
});