/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.service.PropietarioService", {
  inject: [
    "propietarioStore", 
    "localStorageService", 
    "appConfig"
  ],
  config: {
    propietarioStore: null,
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

  loadPropietarios: function(params) {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getPropietarioStore().proxy.extraParams = params;
    this.getPropietarioStore().load({
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


  savePropietario: function(propietario) {
    if (this.isNewPropietario(propietario)) {
      this.getPropietarioStore().add(propietario);
    }
    propietario.set("fecha_reg", new Date());
    return this.syncPropietarioStore();
  },

  deletePropietario: function(propietario) {
    this.getPropietarioStore().remove(propietario);
    return this.syncPropietarioStore();
  },

  syncPropietarioStore: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getPropietarioStore().sync({
      success: function(batch, options) {
        var res = Ext.JSON.decode( batch.operations[0].response.responseText);
        if(res.success){
          return deferred.resolve(res);
        } else{
          return deferred.reject(res.msg);
        }
        
      },
      failure: function(batch, options) {
        this.getPropietarioStore().rejectChanges();
        return deferred.reject(batch.exceptions[0].error);
      },
      scope: this
    });
    return deferred.promise;
  },

  isNewPropietario: function(propietario) {
    var esNuevo = propietario.get('propietario_id') ? false : true;
    return esNuevo;
  }
});

 