// Generated by Pablo Sergio Alvarado Gutierrez
/**
 * DeftJS Application class for the sacec application.
 */

Ext.define("sacec.Application", {
  extend: "Deft.mvc.Application",
  requires: [
    "sacec.config.AppConfig",
    "sacec.view.Viewport",
    "sacec.view.login.Login",
    "sacec.service.LoginService",
    "sacec.service.JwtService",
    "sacec.service.NotificationService",
    "sacec.service.LocalStorageService",
    /* Overrides */
    "overrides.rownumberer.RowNumberer",
    "overrides.numberfield.NumberField",
    "overrides.ajax.Ajax",
  ],
  /**
  	* init() runs when Ext.onReady() is called.
  */

    init: function() {
        this.beforeInit();
        jwtService = Ext.create('sacec.service.JwtService');
        var token = localStorage.getItem("token");
        var isTokenExpired = token ? jwtService.isTokenExpired(token) : false;
        Deft.Injector.configure(this.buildInjectorConfiguration());
        Deft.promise.Deferred.enableLogging = false;
        return this.launch();
    },
    /**
     * @protected
     * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
     * @return {Object} The Injector configuration object.
     */

  buildInjectorConfiguration: function() {
    var config;
    config = {
      appConfig: {
        className: "sacec.config.AppConfig",
        parameters: [
          {
            environment: sacec.config.AppConfig.DEVELOPMENT_ENV
            //environment: sacec.config.AppConfig.PRODUCTION_ENV

          }
        ]
      },
      /* Login */
      loginService: "sacec.service.LoginService",
      /* Token */
      jwtService: "sacec.service.JwtService",
      /* Notificaciones */
      notificationService: "sacec.service.NotificationService",
      /* Local Storage */
      localStorageService: "sacec.service.LocalStorageService",
       /*AbstractContext*/
      abstractContext: "sacec.context.AbstractContext",
      /* Menu */
      menuContext: "sacec.context.MenuContext",
      menuService: "sacec.service.MenuService",
      menuStore: "sacec.store.menu.MenuStore",
      /* Propietario  */
      propietarioContext: "sacec.context.PropietarioContext",
      propietarioStore: "sacec.store.propietario.PropietarioStore",
      propietarioService: "sacec.service.PropietarioService",
      /* Modelo Departamento  */
      modeloDepartamentoContext: "sacec.context.ModeloDepartamentoContext",
      modeloDepartamentoStore: "sacec.store.modeloDepartamento.ModeloDepartamentoStore",
      modeloDepartamentoService: "sacec.service.ModeloDepartamentoService",
      /*  Departamento  */
      departamentoContext: "sacec.context.DepartamentoContext",
      departamentoStore: "sacec.store.departamento.DepartamentoStore",
      departamentoService: "sacec.service.DepartamentoService",
      /*  Estructura Tarifaria  */
      estructuraTarifariaContext: "sacec.context.EstructuraTarifariaContext",
      estructuraTarifariaStore: "sacec.store.estructuraTarifaria.EstructuraTarifariaStore",
      estructuraTarifariaService: "sacec.service.EstructuraTarifariaService",
      /*  Deudas */
      deudaContext: "sacec.context.DeudaContext",
      deudaStore: "sacec.store.deuda.DeudaStore",
      deudaService: "sacec.service.DeudaService",
      /*  Pago */
      pagoContext: "sacec.context.PagoContext",
      pagoStore: "sacec.store.pago.PagoStore",
      pagoService: "sacec.service.PagoService",
      /*  Egreso */
      egresoContext: "sacec.context.EgresoContext",
      egresoStore: "sacec.store.egreso.EgresoStore",
      egresoService: "sacec.service.EgresoService",
   
    };
    return config;
  },

  /**
  	* @protected
  	* Runs at the start of the init() method. Override in subclasses if needed.
  */
    beforeInit: function() {
        splashscreen = Ext.getBody().mask('Iniciando la aplicacion...', 'splashscreen');
        splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        })
    },
    /**
     * @protected
     * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
     */
    launch: function(){
        jwtService = Ext.create('sacec.service.JwtService');
        Ext.setGlyphFontFamily('FontAwesome');
        var task = new Ext.util.DelayedTask(function(){
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startime, eOpts){
                        var token;

                        // Check to see the current value of the localStorage key
                        token = localStorage.getItem("token");
                        var isTokenExpired = token ? jwtService.isTokenExpired(token) : false;
                        Ext.widget(token && !isTokenExpired ? 'app-main' : 'login');
                    }
                }
            });

        });

        task.delay(2000);
    }
});