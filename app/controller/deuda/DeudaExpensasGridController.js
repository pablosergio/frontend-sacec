/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.deuda.DeudaExpensasGridController", {
  extend: "sacec.controller.AbstractSacecController",
  requires: ["sacec.view.pago.PagoForm"],
  inject: [
    "deudaContext",
    "deudaService",
    "pagoContext"
  ],
  config:{
    deudaContext: null,
    deudaService: null,
    deuda: null,
    pagoContext: null
  },
  observe: {
    deudaContext: {
      deudaCreated: "loadInitialData"
    },
    pagoContext: {
      pagoCreated: "loadInitialData"
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
    btnPagar: {
      click: "onBtnPagarClick"
    },
    btnImprimirRecibo: {
      click: "onBtnImprimirReciboClick"
    },
    comboDepartamento: {},
    comboMes: {}
    /*historyRecord: {
     click: "onHistoryGridClick"
    }*/
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    _this.getBtnPagar().disable();
    _this.getBtnImprimirRecibo().disable();
    this.getView().setLoading(true);
    return this.getDeudaService().loadDeudas({tipoTarifa: 'EXPENSAS'}).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },

  loadDeudaExpensas: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getDeudaService().loadDeudas({ tipoTarifa: 'EXPENSAS' }).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  
  
  onSelectRecord: function(grid, deuda, row, rowIndex, event) {
    if(deuda.get('estado') == 'PAGADO'){
      this.getBtnPagar().disable();
      this.getBtnImprimirRecibo().enable();
    }
    else {
      this.getBtnPagar().enable();
      this.getBtnImprimirRecibo().disable();
    }
      
    return this.setDeuda(deuda);
  },

  
  onFilterGridClick: function(){
    _this = this;
    _this.getView().getStore().proxy.extraParams = { departamentoId: _this.getComboDepartamento().getValue(), mes: _this.getComboMes().getValue() };
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
    _this = this;
    _this.getComboDepartamento().setValue(null);
    _this.getComboMes().setValue(null);
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

  onBtnPagarClick: function(){
    var _this = this;
    var record = _this.getView().getSelectionModel().getSelection()[0];
    if(!record)
      return _this.getNotificationService().info('Informacion', 'Primero debe seleccionar un registro')
    var deuda = Ext.create("sacec.model.deuda.Deuda",{
      deudaId: record.get('deudaId'),
      mes: record.get('mes'),
      precio: record.get('precio')
    });

    var departamento = Ext.create('sacec.model.departamento.Departamento', {
      nombre: record.get('departamento').nombre,
    });
    
    var modelo = Ext.create('sacec.model.modeloDepartamento.ModeloDepartamento', {
      tipo: record.get('departamento').modeloDepartamento.tipo,
    });
    
    var pago = Ext.create('sacec.model.pago.Pago', {
      deudaId: record.get('deudaId'),
      fechaRegistro: new Date(),
      precio: record.get('precio'),
      tipoTarifa: record.get('tipoTarifa'),
      pagadoPor: record.get('pagadoPor'),
      observacion: record.get('observacion')
    });
    
    var formPago = Ext.widget('sacec-view-pago-form', {
      deuda: deuda,
      departamento: departamento,
      modelo: modelo,
      pago: pago
    });
    var windowPagar = Ext.widget('window', {
      iconCls: 'payment',
      resizable: false,
      closable: false,
      modela: true,
      width: 400,
      items: [formPago]
    });

    windowPagar.show();
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
          
  }
});
