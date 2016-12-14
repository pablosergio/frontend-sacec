/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.modeloDepartamento.ModeloDepartamentoMainPanelController", {
  extend: "Deft.mvc.ViewController",
  inject: [
    "modeloDepartamentoContext"
  ],
  config: {
   modeloDepartamentoContext: null
  },
  observe: {
    modeloDepartamentoContext: {
      modeloDepartamentoCreated: "onCollapsePanel",
      modeloDepartamentoOpened: "onExpandPanel",
      modeloDepartamentoCanceled: "onCollapsePanel",
      modeloDepartamentoDeleted: "onCollapsePanel"
    }
  },
  control: {
    view: {
      boxready: "loadInitialData",
    },

    panelCollapsibleModeloDepartamento: {

    }
    
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.getPanelCollapsibleModeloDepartamento().collapse();
  },

  onCollapsePanel: function(){
    var _this = this;
    _this.getPanelCollapsibleModeloDepartamento().collapse();
  },

  onExpandPanel: function(){
    var _this = this;
    _this.getPanelCollapsibleModeloDepartamento().expand();
  }

});
