Ext.define("sacec.store.estructuraTarifaria.EstructuraTarifariaStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.estructuraTarifaria.EstructuraTarifaria",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.estructuraTarifaria.EstructuraTarifaria",
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
            read: this.getAppConfig().getEndpoint("estructuraTarifaria").url,
            create: this.getAppConfig().getEndpoint("estructuraTarifaria").url,
            update: this.getAppConfig().getEndpoint("estructuraTarifaria").url,
            destroy: this.getAppConfig().getEndpoint("estructuraTarifaria").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'estructuraTarifariaId',
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
