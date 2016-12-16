Ext.define("sacec.store.egreso.EgresoStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.egreso.Egreso",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.egreso.Egreso",
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
            read: this.getAppConfig().getEndpoint("egresos").url,
            create: this.getAppConfig().getEndpoint("egresos").url,
            update: this.getAppConfig().getEndpoint("egresos").url,
            destroy: this.getAppConfig().getEndpoint("egresos").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'egresoId',
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
