/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.view.menu.Menu", {
  extend: "Ext.panel.Panel",
  mixins: ['Deft.mixin.Controllable', 'Deft.mixin.Injectable'],
  controller: 'sacec.controller.menu.MenuController',
  alias: "widget.sacec-view-menu-accordion",
  layout: {
    type: 'accordion'
  },
  initComponent: function() {
    var _this = this;
    Ext.apply(this, {
      title: 'Menu',
      glyph: 0xf0e8,
      witdh: 240
    });
    return this.callParent(arguments);
  }
});