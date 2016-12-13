/* Desarrollado por Pablo Sergio Alvarado G. */
/* Abstract controller para Formularios */

Ext.define("sacec.controller.AbstractBaseFormController", {
  extend: "sacec.controller.AbstractSacecController",
  control: {
    view: {
      boxready: "onBoxReady"
    },
    saveButton: {
      click: "onSaveButtonClick"
    },
    copyButton: {
      click: "onCopyButtonClick"
    },
    cancelButton: {
      click: "onCancelButtonClick"
    },
   editButton: {
      click: "onEditButtonClick"
    }
  },
  
  init: function() {
    return this.callParent(arguments);
  },
 
  onBoxReady: function() {
    var _this = this;
    _this.getSaveButton().setVisible(false);
    _this.getCopyButton().setVisible(false);
    _this.getEditButton().setVisible(false);
    _this.getCancelButton().setVisible(false);
  }
 
});
