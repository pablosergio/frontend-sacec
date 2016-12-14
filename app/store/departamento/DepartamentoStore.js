Ext.define("sacec.store.departamento.DepartamentoStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.departamento.Departamento",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.departamento.Departamento",
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
            read: this.getAppConfig().getEndpoint("departamentos").url,
            create: this.getAppConfig().getEndpoint("departamentos").url,
            update: this.getAppConfig().getEndpoint("departamentos").url,
            destroy: this.getAppConfig().getEndpoint("departamentos").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'nombre',
                    direction: 'ASC'
                }
      ]    
    });
    return this.callParent(arguments);
  },

  loadPage: function(page, options){
        this.callParent( [page, options] );
    }
});
