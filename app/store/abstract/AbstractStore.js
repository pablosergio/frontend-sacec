// Generated by Pablo Sergio Alvarado Gutierrez
/**
* AbstracStore for the sacec application.
*/

Ext.define('sacec.store.abstract.AbstractStore', {
	extend: "Ext.data.Store",
	storeId: 'abstractStore',
    inject: ['jwtService', 'localStorageService', 'notificationService'],
    pageSize: 20,
    listeners: {
        beforeload: "checkToken",
        beforesync: "checkToken",
    },

    checkToken: function(store, operation, opts){
        var me = this;
        var token;
        token = me.localStorageService.get("token");
        var isTokenExpired = token ? me.jwtService.isTokenExpired(token) : false;
        if(isTokenExpired){
            me.notificationService.error("Informacion", "El Token ha expirado. En breve, se le redireccionara a la pagina de autenticacion");
            me.localStorageService.delete('token');
            var task = new Ext.util.DelayedTask(function(){
                window.location.reload();
            });

            task.delay(3000);
        }
    },

});