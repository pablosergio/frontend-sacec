/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.estructuraTarifaria.EstructuraTarifariaMainPanelController", {
  extend: "Deft.mvc.ViewController",
  inject: [
    "estructuraTarifariaContext"
  ],
  config: {
   estructuraTarifariaContext: null
  },
  observe: {
    estructuraTarifariaContext: {
      estructuraTarifariaCreated: "onCollapsePanel",
      estructuraTarifariaOpened: "onExpandPanel",
      estructuraTarifariaCanceled: "onCollapsePanel",
      estructuraTarifariaDeleted: "onCollapsePanel"
    }
  },
  control: {
    view: {
      boxready: "loadInitialData",
    },

    panelCollapsibleEstructuraTarifaria: {

    }
    
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.getPanelCollapsibleEstructuraTarifaria().collapse();
  },

  onCollapsePanel: function(){
    var _this = this;
    _this.getPanelCollapsibleEstructuraTarifaria().collapse();
  },

  onExpandPanel: function(){
    var _this = this;
    _this.getPanelCollapsibleEstructuraTarifaria().expand();
  }

});
