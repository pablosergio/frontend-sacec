/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.view.MainPanel", {
extend: "Ext.tab.Panel",
  mixins: [ 'Deft.mixin.Controllable', 'Deft.mixin.Injectable' ],
  controller: "sacec.controller.MainPanelController",
  alias: "widget.sacec-view-mainPanel",
  initComponent: function() {
    Ext.applyIf(this, {
      header: false,
      plain: true
    });
    return this.callParent(arguments);
  }
});
