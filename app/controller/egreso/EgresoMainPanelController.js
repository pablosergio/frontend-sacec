/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.egreso.EgresoMainPanelController", {
  extend: "Deft.mvc.ViewController",
  inject: [
    "egresoContext"
  ],
  config: {
   egresoContext: null
  },
  observe: {
    egresoContext: {
      egresoCreated: "onCollapsePanel",
      egresoOpened: "onExpandPanel",
      egresoCanceled: "onCollapsePanel",
      egresoDeleted: "onCollapsePanel"
    }
  },
  control: {
    view: {
      boxready: "loadInitialData",
    },

    panelCollapsibleEgreso: {

    }
    
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.getPanelCollapsibleEgreso().collapse();
  },

  onCollapsePanel: function(){
    var _this = this;
    _this.getPanelCollapsibleEgreso().collapse();
  },

  onExpandPanel: function(){
    var _this = this;
    _this.getPanelCollapsibleEgreso().expand();
  }

});
