/* Desarrollado por Pablo Sergio Alvarado G. */
Ext.define("sglm.view.menu.Item", {
  extend: "Ext.tree.Panel",
  //controller: 'sglm.controller.Accordion',
  alias: "widget.sglm-view-menu-item",
  initComponent: function() {
    var _this = this;
    Ext.apply(this, {
      border: 0,
      autoScroll: true,
      rootVisible: false
    });
    return this.callParent(arguments);
  }
});
