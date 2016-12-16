Ext.define("sacec.store.lista.ListaStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.lista.Lista",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.lista.Lista",
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
            read: this.getAppConfig().getEndpoint("listas").url,
            create: this.getAppConfig().getEndpoint("listas").url,
            update: this.getAppConfig().getEndpoint("listas").url,
            destroy: this.getAppConfig().getEndpoint("listas").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'listaId',
                    direction: 'DESC'
                }
      ]    
    });
    return this.callParent(arguments);
  },

  loadPage: function(page, options){
        /*var params = this.lastOptions.params;
        options = {
            params: params
        };*/
        //Pass it along to the parent loadPage.
        this.callParent( [page, options] );
    }
});