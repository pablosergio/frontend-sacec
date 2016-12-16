Ext.define("sacec.store.pago.PagoStore", {
  extend: "sacec.store.abstract.AbstractStore",
  requires: [
    "sacec.model.pago.Pago",
  ],
  inject: ["appConfig", "localStorageService"],
  config: {
        appConfig: null,
        localStorageService: null
  },
  model: "sacec.model.pago.Pago",
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
            read: this.getAppConfig().getEndpoint("pagos").url,
            create: this.getAppConfig().getEndpoint("pagos").url,
            update: this.getAppConfig().getEndpoint("pagos").url,
            destroy: this.getAppConfig().getEndpoint("pagos").url
          },
          simpleSortMode: true
      },
      sorters : [
                {
                    property: 'pagoId',
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
