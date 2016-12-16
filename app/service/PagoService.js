/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.PagoService", {
  inject: [
    "pagoStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    pagoStore: null,
    localStorageService: null,
    appConfig: null
  },
  constructor: function(config) {
    if (config == null) {
      config = {};
    }
    this.initConfig(config);
    return this.callParent(arguments);
  },

  loadInitialData: function() {
    //return Deft.Chain.parallel([this.loadProbabilities, this.loadRevenueImpacts, this.loadAffectedItems], this);
  },

  loadPagos: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getPagoStore().proxy.extraParams = params;
    this.getPagoStore().load({
      callback: function(records, operation, success) {
        if (success) {
          return deferred.resolve(records);
        } else {
          return deferred.reject("Codigo error: " + operation.error.status + ". Error: " + operation.error.statusText);
        }
      },
      scope: this
    });
    return deferred.promise;
  },


  savePago: function(pago) {
    if (this.isNewPago(pago)) {
      this.getPagoStore().add(pago);
    }
    return this.syncPagoStore();
  },

  deletePago: function(pago) {
    this.getPagoStore().remove(pago);
    return this.syncPagoStore();
  },

  syncPagoStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getPagoStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getPagoStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewPago: function(pago) {
    var esNuevo = pago.get('pagoId') ? false : true;
    return esNuevo;
  }
});

 