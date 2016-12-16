/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.egreso.EgresoFormController", {
  extend: "sacec.controller.AbstractBaseFormController",
  inject: [
    "egresoContext",
    "egresoService"
  ],
  config:{
    egresoContext: null,
    egresoService: null,
    egreso: null
  },
  observe: {
     egresoContext: {
        egresoOpened: "onEgresoOpened"  
     }
  },
  init: function() {
    return this.callParent(arguments);
  },
 
  
  onEgresoOpened: function(egreso) {
    var _this = this;
    _this.getView().getForm().reset();
    _this.getView().setTitle('Datos del Egreso');
    _this.setEgreso(egreso);
    _this.getView().loadRecord(_this.getEgreso());
    if (_this.getEgresoService().isNewEgreso(egreso)) {
      _this.getView().setSoloLecturaTodos(false);
      _this.getEditButton().setVisible(false);
      _this.getCopyButton().setVisible(false);
      _this.getSaveButton().setVisible(true);
      _this.getCancelButton().setVisible(true);
    }else {
      _this.getView().setSoloLecturaTodos(true);
      _this.getCopyButton().setVisible(true);
      _this.getEditButton().setVisible(true);
      _this.getSaveButton().setVisible(false);
      _this.getCancelButton().setVisible(false);
    }
  },
 
  onSaveButtonClick: function() {
    this.getView().getForm().updateRecord(this.getEgreso());
    return this.saveEgreso(this.getEgreso());
  },
 
  saveEgreso: function(egreso) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getEgresoService().saveEgreso(egreso).then({
      success: function(res) {
        _this.getView().setTitle('Datos del Egreso');
        _this.getCopyButton().setVisible(true);
        _this.getEditButton().setVisible(true);
        _this.getSaveButton().setVisible(false);
        _this.getCancelButton().setVisible(false)
        _this.getView().setSoloLecturaTodos(true);
        _this.getEgresoContext().egresoCreated();
        return _this.getNotificationService().success("Guardar Egreso", res.msg);
      },
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Guardar Egreso", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
 
  onCopyButtonClick: function() {
    var copyOfEgreso;
    copyOfEgreso = this.getEgreso().copy();
    copyOfEgreso.set('egresoId', null);
    return this.onEgresoOpened(copyOfEgreso);
  },

  onCancelButtonClick: function(){
    var _this = this;
    _this.getView().loadRecord(_this.getEgreso());
    if (_this.getEgresoService().isNewEgreso(_this.getEgreso())) {
      _this.getEditButton().setVisible(false);
      _this.getCopyButton().setVisible(false);
    }else{
      _this.getCopyButton().setVisible(true);
      _this.getEditButton().setVisible(true);
    }
    _this.getCancelButton().setVisible(false);
    _this.getSaveButton().setVisible(false);
    _this.getView().setSoloLecturaTodos(true);
    _this.getEgresoContext().egresoCanceled();
  },

  onEditButtonClick: function(){
    var _this = this;
    _this.getSaveButton().setVisible(true);
    _this.getCancelButton().setVisible(true);
    _this.getCopyButton().setVisible(false);
    _this.getEditButton().setVisible(false);
    _this.getView().setSoloLecturaTodos(false);
 }

});
