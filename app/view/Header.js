/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.view.Header', {
  extend: "Ext.panel.Panel",
  alias: "widget.sacec-view-header",
  requires: ["sacec.view.menu.MainMenu"],
  ui: 'footer',
  initComponent: function() {
    Ext.applyIf(this, {
      dockedItems: [{
        xtype: 'sacec-view-main-menu'
      }]
    });
    return this.callParent(arguments);
  }
});