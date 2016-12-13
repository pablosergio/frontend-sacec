// /* Desarrollado por Pablo Sergio Alvarado G. */
/**
* Abstract ViewController for the sacec application.
*/

Ext.define("sacec.controller.AbstractSacecController", {
  extend: "Deft.mvc.ViewController",
  inject: [
    //"loginService",
    //"menuService",
    "notificationService",
    "jwtService",
    "localStorageService",
    "abstractContext",
  ],
  config: {
    //loginService: null,
    //menuService: null,
    notificationService: null,
    jwtService: null,
    localStorageService: null,
    abstractContext: null
  },
  init: function() {
    return this.callParent(arguments);
  }
});
