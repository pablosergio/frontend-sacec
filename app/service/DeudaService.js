/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.DeudaService", {
  inject: [
    "deudaStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    deudaStore: null,
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

  loadDeudas: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getDeudaStore().proxy.extraParams = params;
    this.getDeudaStore().load({
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


  saveDeuda: function(deuda) {
    if (this.isNewDeuda(deuda)) {
      this.getDeudaStore().add(deuda);
    }
    Deuda.set("fechaRegistro", new Date());
    return this.syncDeudaStore();
  },

  deleteDeuda: function(deuda) {
    this.getDeudaStore().remove(deuda);
    return this.syncDeudaStore();
  },

  syncDeudaStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getDeudaStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getDeudaStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewDeuda: function(deuda) {
    var esNuevo = deuda.get('deudaId') ? false : true;
    return esNuevo;
  }
});

 