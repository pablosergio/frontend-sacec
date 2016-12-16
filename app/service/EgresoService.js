/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.EgresoService", {
  inject: [
    "egresoStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    egresoStore: null,
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

  loadEgresos: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getEgresoStore().proxy.extraParams = params;
    this.getEgresoStore().load({
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


  saveEgreso: function(egreso) {
    if (this.isNewEgreso(egreso)) {
      this.getEgresoStore().add(egreso);
    }
    return this.syncEgresoStore();
  },

  deleteEgreso: function(egreso) {
    this.getEgresoStore().remove(egreso);
    return this.syncEgresoStore();
  },

  syncEgresoStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getEgresoStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getEgresoStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewEgreso: function(egreso) {
    var esNuevo = egreso.get('egresoId') ? false : true;
    return esNuevo;
  }
});

 