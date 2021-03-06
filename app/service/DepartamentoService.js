/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.DepartamentoService", {
  inject: [
    "departamentoStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    departamentoStore: null,
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

  loadDepartamentos: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getDepartamentoStore().proxy.extraParams = params;
    this.getDepartamentoStore().load({
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


  saveDepartamento: function(departamento) {
    if (this.isNewDepartamento(departamento)) {
      this.getDepartamentoStore().add(departamento);
    }
    departamento.set("fechaRegistro", new Date());
    return this.syncDepartamentoStore();
  },

  deleteDepartamento: function(departamento) {
    this.getDepartamentoStore().remove(departamento);
    return this.syncDepartamentoStore();
  },

  syncDepartamentoStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getDepartamentoStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getDepartamentoStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewDepartamento: function(departamento) {
    var esNuevo = departamento.get('departamentoId') ? false : true;
    return esNuevo;
  }
});

 