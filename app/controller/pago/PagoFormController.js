/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.pago.PagoFormController", {
  extend: "sacec.controller.AbstractSacecController",
  inject: [
    "pagoContext",
    "pagoService"
  ],
  config:{
    pagoContext: null,
    pagoService: null,
    deuda: null,
    departamento: null,
    modelo: null,
    pago: null
  },
  observe: {
    /*pagoContext: {
      pagoCreated: "loadInitialData"
    }*/
  },

  control: {
    view: {
      boxready: "loadInitialData",
    },
    saveButton: {
      click: "onSaveButtonClick"
    },
    cancelButton: {
      click: "onCancelButtonClick"
    },
    fieldPagadoPor: {},
    fieldObservacion: {}
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.setDeuda(_this.getView().deuda);
    _this.setDepartamento(_this.getView().departamento);
    _this.setModelo(_this.getView().modelo);
    _this.setPago(_this.getView().pago);
    _this.getView().loadRecord(_this.getDeuda());
    _this.getView().loadRecord(_this.getDepartamento());
    _this.getView().loadRecord(_this.getModelo());
    _this.getView().loadRecord(_this.getPago());
    
  },

  onSaveButtonClick: function(){
    return Ext.MessageBox.confirm("Confirmar", "¿Esta seguro de guardar el registro?", function (button) {
            if (button === "yes") {
                return this.guardarPago();
            }
        }, this);
  },

  guardarPago: function(){
    var _this = this;
    _this.getView().getForm().updateRecord(_this.getPago());
    if(_this.getPagoService().isNewPago(_this.getPago())){
      _this.getPago().phantom = true;
    }
    _this.getView().setLoading(true);
    return _this.getPagoService().savePago(_this.getPago()).then({
        success: function(res){
          _this.getView().up('window').close();
          _this.getPagoContext().pagoCreated({});
          var panel = Ext.create('sacec.view.reports.Reports', {
            onlyPrint: true,
            parametros: {
              pago_id: 1,
              //nombre : _this.getLocalStorageService().get('user').nombre
              nombre : 'palvarado'
            },
            ruta: 'rpt_imprimir_pago'
          });
          panel.show();
          return _this.getNotificationService().success('Guardar Pago', res.msg);
        },
        failure: function(errorMessage) {
          return _this.getNotificationService().error("Guardar Pago", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
    
  },

  onCancelButtonClick: function(){
    var _this = this;
    return _this.getView().up('window').close();
  }  
});
