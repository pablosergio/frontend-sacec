/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.propietario.PropietarioFormController", {
  extend: "sacec.controller.AbstractBaseFormController",
  inject: [
    "propietarioContext",
    "propietarioService"
  ],
  config:{
    propietarioContext: null,
    propietarioService: null,
    propietario: null
  },
  observe: {
     propietarioContext: {
        propietarioOpened: "onPropietarioOpened"  
     }
  },
  init: function() {
    return this.callParent(arguments);
  },
 
  
  onPropietarioOpened: function(propietario) {
    var _this = this;
    _this.getView().getForm().reset();
    _this.getView().setTitle('Datos del Propietario');
    _this.setPropietario(propietario);
    _this.getView().loadRecord(_this.getPropietario());
    if (_this.getPropietarioService().isNewPropietario(propietario)) {
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
    this.getView().getForm().updateRecord(this.getPropietario());
    return this.savePropietario(this.getPropietario());
  },
 
  savePropietario: function(propietario) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getPropietarioService().savePropietario(propietario).then({
      success: function(res) {
        _this.getView().setTitle('Datos del Propietario');
        _this.getCopyButton().setVisible(true);
        _this.getEditButton().setVisible(true);
        _this.getSaveButton().setVisible(false);
        _this.getCancelButton().setVisible(false)
        _this.getView().setSoloLecturaTodos(true);
        _this.getPropietarioContext().propietarioCreated();
        return _this.getNotificationService().success("Guardar Propietario", res.msg);
      },
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Guardar Propietario", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
 
  onCopyButtonClick: function() {
    var copyOfPropietario;
    copyOfPropietario = this.getPropietario().copy();
    copyOfPropietario.set('propietarioId', null);
    return this.onPropietarioOpened(copyOfPropietario);
  },

  onCancelButtonClick: function(){
    var _this = this;
    _this.getView().loadRecord(_this.getPropietario());
    if (_this.getPropietarioService().isNewPropietario(_this.getPropietario())) {
      _this.getEditButton().setVisible(false);
      _this.getCopyButton().setVisible(false);
    }else{
      _this.getCopyButton().setVisible(true);
      _this.getEditButton().setVisible(true);
    }
    _this.getCancelButton().setVisible(false);
    _this.getSaveButton().setVisible(false);
    _this.getView().setSoloLecturaTodos(true);
    _this.getPropietarioContext().propietarioCanceled();
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
