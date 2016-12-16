Ext.define("sacec.store.lista.ListaByTipoStore", {
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
            read: this.getAppConfig().getEndpoint("listaByTipo").url,
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'descripcion',
                    direction: 'ASC'
                }
      ]    
    });
    return this.callParent(arguments);
  },

  loadPage: function(page, options){
        //Pass it along to the parent loadPage.
        this.callParent( [page, options] );
    }
});
