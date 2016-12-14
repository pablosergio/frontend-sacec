Ext.define("sacec.store.modeloDepartamento.ModeloDepartamentoStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.modeloDepartamento.ModeloDepartamento",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.modeloDepartamento.ModeloDepartamento",
  constructor: function(cfg) {
    var _this = this;
    if (cfg == null) {
      cfg = {};
    }
    this.initConfig(cfg);
    Ext.apply(this, {
      proxy: {
          type: 'rest',
          reader: {
            type: "json",
            root: "rows",
            totalProperty: "total",
            successProperty: "success",
            messageProperty: "msg"
          },
          writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: true,
            //root: 'data'
          },
          headers: {
            'Authorization': "Bearer " + _this.getLocalStorageService().get('token') 
          },
          api: {
            read: this.getAppConfig().getEndpoint("modeloDepartamentos").url,
            create: this.getAppConfig().getEndpoint("modeloDepartamentos").url,
            update: this.getAppConfig().getEndpoint("modeloDepartamentos").url,
            destroy: this.getAppConfig().getEndpoint("modeloDepartamentos").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'modeloDepartamentoId',
                    direction: 'DESC'
                }
      ]    
    });
    return this.callParent(arguments);
  },

  loadPage: function(page, options){
        this.callParent( [page, options] );
    }
});
