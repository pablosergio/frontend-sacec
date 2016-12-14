/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.ModeloDepartamentoService", {
  inject: [
    "modeloDepartamentoStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    modeloDepartamentoStore: null,
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

  loadModeloDepartamentos: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getModeloDepartamentoStore().proxy.extraParams = params;
    this.getModeloDepartamentoStore().load({
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


  saveModeloDepartamento: function(modeloDepartamento) {
    if (this.isNewModeloDepartamento(modeloDepartamento)) {
      this.getModeloDepartamentoStore().add(modeloDepartamento);
    }
    modeloDepartamento.set("fechaRegistro", new Date());
    return this.syncModeloDepartamentoStore();
  },

  deleteModeloDepartamento: function(modeloDepartamento) {
    this.getModeloDepartamentoStore().remove(modeloDepartamento);
    return this.syncModeloDepartamentoStore();
  },

  syncModeloDepartamentoStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getModeloDepartamentoStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getModeloDepartamentoStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewModeloDepartamento: function(modeloDepartamento) {
    var esNuevo = modeloDepartamento.get('modeloDepartamentoId') ? false : true;
    return esNuevo;
  }
});

 