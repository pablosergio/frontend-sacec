/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.propietario.PropietarioMainPanelController", {
  extend: "Deft.mvc.ViewController",
  inject: [
    "propietarioContext"
  ],
  config: {
   propietarioContext: null
  },
  observe: {
    propietarioContext: {
      propietarioCreated: "onCollapsePanel",
      propietarioOpened: "onExpandPanel",
      propietarioCanceled: "onCollapsePanel"
    }
  },
  control: {
    view: {
      boxready: "loadInitialData",
    },

    panelCollapsiblepropietario: {

    }
    
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.getPanelCollapsiblePropietario().collapse();
  },

  onCollapsePanel: function(){
    var _this = this;
    _this.getPanelCollapsiblePropietario().collapse();
  },

  onExpandPanel: function(){
    var _this = this;
    _this.getPanelCollapsiblePropietario().expand();
  }

});
