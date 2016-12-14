/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.departamento.DepartamentoMainPanelController", {
  extend: "Deft.mvc.ViewController",
  inject: [
    "departamentoContext"
  ],
  config: {
   departamentoContext: null
  },
  observe: {
    departamentoContext: {
      departamentoCreated: "onCollapsePanel",
      departamentoOpened: "onExpandPanel",
      departamentoCanceled: "onCollapsePanel",
      departamentoDeleted: "onCollapsePanel"
    }
  },
  control: {
    view: {
      boxready: "loadInitialData",
    },

    panelCollapsibleDepartamento: {

    }
    
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.getPanelCollapsibleDepartamento().collapse();
  },

  onCollapsePanel: function(){
    var _this = this;
    _this.getPanelCollapsibleDepartamento().collapse();
  },

  onExpandPanel: function(){
    var _this = this;
    _this.getPanelCollapsibleDepartamento().expand();
  }

});
