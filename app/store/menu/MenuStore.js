Ext.define("sglm.store.menu.MenuStore", {
  extend: "Ext.data.ArrayStore",
  inject: ["localStorageService"],
  requires: ["sglm.model.menu.Root"],
  model: "sglm.model.menu.Root",
  autoLoad: false,
  proxy: {
    type: "memory"
  },
  /**
   Simulate loading the Probability objects
  */

  load: function(options) {
    var data = this.getMenuFromLocalStorage();
    this.loadData(data);
    return options.callback(this.data.items, {}, true);
  },

  getMenuFromLocalStorage: function(){
    var menu = this.localStorageService.get('menu');
    var menuPrincipal = this.construirMenu(menu);
    return menuPrincipal;
  },

  construirMenu: function(menu){
    var _this = this;
    var menuPrincipal = [];
    Ext.each(menu, function(record){
      var opcion = Ext.create('sglm.model.menu.Opcion', {
        text: record.titulo,
        iconCls: record.iconcls,
        className: record.href,
        alias: record.alias,
        menu: record.submenu ? _this.construirMenu(record.submenu) : null
      });
      menuPrincipal.push(opcion);
    });
    return menuPrincipal;
  }
});
