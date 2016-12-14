/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.EstructuraTarifariaService", {
  inject: [
    "estructuraTarifariaStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    estructuraTarifariaStore: null,
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

  loadEstructuraTarifaria: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getEstructuraTarifariaStore().proxy.extraParams = params;
    this.getEstructuraTarifariaStore().load({
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


  saveEstructuraTarifaria: function(estructuraTarifaria) {
    if (this.isNewEstructuraTarifaria(estructuraTarifaria)) {
      this.getEstructuraTarifariaStore().add(estructuraTarifaria);
    }
    estructuraTarifaria.set("fechaRegistro", new Date());
    return this.syncEstructuraTarifariaStore();
  },

  deleteEstructuraTarifaria: function(estructuraTarifaria) {
    this.getEstructuraTarifariaStore().remove(estructuraTarifaria);
    return this.syncEstructuraTarifariaStore();
  },

  syncEstructuraTarifariaStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getEstructuraTarifariaStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getEstructuraTarifariaStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewEstructuraTarifaria: function(estructuraTarifaria) {
    var esNuevo = estructuraTarifaria.get('estructuraTarifariaId') ? false : true;
    return esNuevo;
  }
});

 