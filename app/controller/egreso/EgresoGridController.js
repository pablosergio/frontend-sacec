/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.egreso.EgresoGridController", {
  extend: "sacec.controller.AbstractBaseGridController",
  //requires: ['sacec.view.Egreso.EgresoFiltroForm'],
  inject: [
    "egresoContext",
    "egresoService"
  ],
  config:{
    egresoContext: null,
    egresoService: null,
    egreso: null,
  },
  observe: {
    egresoContext: {
      egresoCreated: "loadInitialData"
    }
  },

  control: {
    view: {
      boxready: "loadInitialData",
      select: "onSelectRecord"
    },
    filterGrid: {
      click: "onFilterGridClick"
    },
    textoFiltrado: {

    },
    clearFilter: {
      click: "onClearFilterClick"
    },
    btnAdd: {
      click: "onBtnAddRecordClick"
    },
    btnImprimirRecibo: {
      click: "onBtnImprimirReciboClick"
    },
    deleteActionColumn: {
      click: "onActionColumnClick"
    },
    comboTipoEgreso: {},
  },
  
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getEgresoService().loadEgresos({}).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },

  loadEgresos: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getEgresoService().loadEgresos({  }).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  
  
  onBtnAddRecordClick: function() {
    var nuevoEgreso = Ext.create("sacec.model.egreso.Egreso", {
      fechaRegistro: new Date()
    });
    return this.getEgresoContext().egresoOpened(nuevoEgreso);
  },
  
  onSelectRecord: function(grid, egreso, row, rowIndex, event) {
    this.setEgreso(egreso);
    return this.getEgresoContext().egresoOpened(egreso);
  },

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, egreso, row){
    var _this = this;
    
    return Ext.MessageBox.confirm("Confirmar", "¿Esta seguro de eliminar el registro?", function (button) {
            if (button === "yes") {
                return this.deleteEgreso(egreso);
            }
        }, this);
  },

  deleteEgreso: function (egreso) {
        var _this = this;
        _this.getView().getStore().remove(egreso);
        _this.getView().getStore().sync({
            success: function () {
                _this.loadInitialData();
                _this.getEgresoContext().egresoDeleted(egreso);
                return _this.getNotificationService().success('Eliminar Egreso', 'El registro fue eliminado correctamente');
            },
            failure: function (batch, options) {
                _this.loadInitialData();
                return _this.getNotificationService().error('Eliminar Egreso', 'Ha ocurrido un error al intentar eliminar el registro');
            },
            scope: this

        });
    },

  onFilterGridClick: function(){
    _this = this;
    _this.getView().getStore().proxy.extraParams = { descripcion: _this.getComboTipoEgreso().getRawValue() };
    _this.getView().getStore().load({
      callback: function(records, operation, success) {
        if (success) {
          return _this.getTextoFiltrado().setVisible(true);
        }
      },
      scope: this
    });
  },

  onClearFilterClick: function(){
    var _this = this;
    _this.getComboTipoEgreso().setValue(null);
    _this.getView().getStore().proxy.extraParams = { };
    _this.getView().getStore().load({
      callback: function(records, operation, success) {
        if (success) {
          return _this.getTextoFiltrado().setVisible(false);
        }
      },
      scope: this
    });
  },

  onBtnImprimirReciboClick: function(){
    var _this = this;
    var record = _this.getView().getSelectionModel().getSelection()[0];
    if(!record)
      return _this.getNotificationService().info('Informacion', 'Primero debe seleccionar un registro')
    
    var token = _this.localStorageService.get('token');
    var jwtService = Ext.create('sacec.service.JwtService');
    var _username =  jwtService.decodeToken(token).username;    
                
    var panel = Ext.create('sacec.view.reports.Reports', {
            onlyPrint: true,
            parametros: {
              pago_id: _this.getDeuda().get('pagoId'),              //nombre : _this.getLocalStorageService().get('user').nombre
              nombre : _username
            },
            ruta: 'rpt_imprimir_pago'
    });
    panel.show();
          
  },

 /*Funcion para realizar la busqueda del historico del registro*/
   onHistoryGridClick: function(){
      var _this = this;
      if(_this.getEgreso()!=null)
      {
        _this.mostrarHistoricos(_this.getEgreso().get('id_obj'), "obj_patrones_trabajo");
      }else
      {
        Ext.MessageBox.alert('Alerta','Debe seleccionar un registro para ver el historico.');
      }
    }
  
});
