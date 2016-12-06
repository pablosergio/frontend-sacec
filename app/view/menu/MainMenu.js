/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.view.menu.MainMenu", {
  extend: "Ext.toolbar.Toolbar",
  controller: 'sacec.controller.menu.MainMenuController',
  alias: "widget.sacec-view-main-menu",
  initComponent: function() {
    var _this = this;
    Ext.apply(this, {
      docked: 'top',
    });
    return this.callParent(arguments);
  }
});
