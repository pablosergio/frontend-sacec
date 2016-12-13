/* Desarrollado por Pablo Sergio Alvarado G. */
/* Abstract controller para Grid Base */

Ext.define("sacec.controller.AbstractBaseGridController", {
  extend: "sacec.controller.AbstractSacecController",
  //requires: ['sglm.view.abstract.AbstractFilterWindow','sglm.view.abstract.AbstractHistoryWindow','sglm.view.historico.HistoricoMainPanel'],
  observe: {
    abstractContext: {
      contextFiltered: "filtrarGridBase"
    }
  },
  control: {
    view: {
      boxready: "loadInitialData",
      select: "onSelectRecord"
    },
    addRecord: {
      click: "onAddRecordClick"
    },

    filterGrid: {
      click: "onFilterGridClick"
    },
    textoFiltrado: {

    },
    clearFilter: {
      click: "onClearFilterClick"
    },
    historyRecord: {
     click: "onHistoryGridClick"
    }
  },
  
  init: function() {
    return this.callParent(arguments);
  },

  filtrarGridBase: function(params){
    var _this = this;
    _this.getView().filtrarGrid(params);
    _this.getTextoFiltrado().setVisible(true);
  },
  
  onClearFilterClick: function(){
    var _this = this;
    _this.getView().store.proxy.extraParams = {estado: 'ACTIVO'};
    _this.getView().store.load({ 
      callback: function(records, operation, success){
        if(success){
          _this.getTextoFiltrado().setVisible(false);  
        }
      }
    });
  },
   onHistoryGridClick: function(){
   },
   mostrarHistoricos: function(id_obj, tabla){
       var historyWindow = Ext.widget('sglm-abstract-history-window', {
            width: 640,
            title: 'Historico Edicion de Datos',
            items: [
              {
                  xtype: 'sglm-view-historico-main-panel',
                  record: { id_obj: id_obj, tabla: tabla }
              }
            ]
          });
          historyWindow.show();
   }

});
