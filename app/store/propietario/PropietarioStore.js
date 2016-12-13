Ext.define("sacec.store.propietario.PropietarioStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.propietario.Propietario",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.propietario.Propietario",
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
            read: this.getAppConfig().getEndpoint("propietarios").url,
            create: this.getAppConfig().getEndpoint("propietarios").url,
            update: this.getAppConfig().getEndpoint("propietarios").url,
            destroy: this.getAppConfig().getEndpoint("propietarios").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'propietarioId',
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
