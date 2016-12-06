/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.controller.MainPanelController', {
    extend: "Deft.mvc.ViewController",
    inject: [
        "menuContext",
        "menuService"
    ],
    config: {
        menuContext: null,
        menuService: null
    },
    requires: [
        "sacec.view.carousel.CarouselPanel",

    ],
    observe: {
	    menuContext: {
	      optionMenuOpened: "onOptionMenuOpened",
	    }
	  },
    control: {
	    view: {
	      boxready: "loadInitialData"
	    }
    },
    init: function() {

        return this.callParent(arguments);
    },
	  /**
	  	* Loads the initial reference dta.
	  */
    loadInitialData: function() {
        var _this = this;
        return this.getView().add({
            xtype: "view-carouselpanel",
            itemId: "home",
            title: "Inicio",
            glyph: 0xf015,
            closable: false,
        }).show();
    },
    /**
     * Responds when a {sglm.model.menu.Item} view is opened.
     * @param {sglm.model.menu.Item} OptionMenu being opened.
     */

    onOptionMenuOpened: function(menuOption){
        var existingMenuOptionPanel;
        existingMenuOptionPanel = this.findExistingTab(menuOption);
        if((existingMenuOptionPanel != null)){
            return existingMenuOptionPanel.show();
        }else{
            var panel = Ext.create(menuOption.className, {
                itemId: 'panel_' + menuOption.alias,
                title: menuOption.text,
                iconCls: menuOption.iconCls || 'application',
                closable: true,
            });

            return this.getView().add(panel).show();
        }
    },

    findExistingTab: function(menuOption) {
        return this.getView().child("#panel_" + menuOption.alias);
    },

    bindKeyMap: function(){
      var _this = this;

      var keyMap = new Ext.util.KeyMap(document,{});
      keyMap.addBinding([
              {
                   key: [65], // this works,
                  //control: true,
                  fn: function(){
                    if(Ext.ComponentQuery.query('#btnAnularOrdenTrabajo')[0] && Ext.ComponentQuery.query('#btnAnularOrdenTrabajo')[0].isDisabled()) return;
                    _this.getOrdenTrabajoContext().anularOrdenTrabajo(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [68], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnDerivarOrdenTrabajo')[0] && Ext.ComponentQuery.query('#btnDerivarOrdenTrabajo')[0].isDisabled()) return;
                    _this.getOrdenTrabajoContext().derivarOrdenTrabajo(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [70], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnFinalizarOrdenTrabajo')[0] && Ext.ComponentQuery.query('#btnFinalizarOrdenTrabajo')[0].isDisabled()) return;
                    _this.getOrdenTrabajoContext().finalizarOrdenTrabajo(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [76], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnCalibracionLote')[0] && Ext.ComponentQuery.query('#btnCalibracionLote')[0].isVisible())
                      _this.getOrdenTrabajoContext().calibrarMedidorLote(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [86], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnVerificacionLote')[0] && Ext.ComponentQuery.query('#btnVerificacionLote')[0].isVisible()) 
                      _this.getOrdenTrabajoContext().verificarMedidorLote(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [73], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnInspeccionIndividual')[0] && Ext.ComponentQuery.query('#btnInspeccionIndividual')[0].isVisible())
                      _this.getOrdenTrabajoContext().inspeccionMedidorIndividual(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [67], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnCalibracionIndividual')[0] && Ext.ComponentQuery.query('#btnCalibracionIndividual')[0].isVisible())
                      _this.getOrdenTrabajoContext().calibracionMedidorIndividual(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [80], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnProgramacionIndividual')[0] && Ext.ComponentQuery.query('#btnProgramacionIndividual')[0].isVisible())
                      _this.getOrdenTrabajoContext().programacionMedidorIndividual(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
              {
                  key: [72], // this works,
                  //control: true,
                  fn: function(){ 
                    if(Ext.ComponentQuery.query('#btnHojaCampo')[0] && Ext.ComponentQuery.query('#btnHojaCampo')[0].isVisible())
                      _this.getOrdenTrabajoContext().hojaCampoMedidor(); 
                  },
                  scope: _this,
                  stopEvent : true
              },
          ]);
    }

});