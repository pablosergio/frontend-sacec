/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.estructuraTarifaria.EstructuraTarifariaFormController", {
  extend: "sacec.controller.AbstractBaseFormController",
  inject: [
    "estructuraTarifariaContext",
    "estructuraTarifariaService"
  ],
  config:{
    estructuraTarifariaContext: null,
    estructuraTarifariaService: null,
    estructuraTarifaria: null
  },
  observe: {
     estructuraTarifariaContext: {
        estructuraTarifariaOpened: "onEstructuraTarifariaOpened"  
     }
  },
  init: function() {
    return this.callParent(arguments);
  },
 
  
  onEstructuraTarifariaOpened: function(estructuraTarifaria) {
    var _this = this;
    _this.getView().getForm().reset();
    _this.getView().setTitle('Datos de la Estructura Tarifaria');
    _this.setEstructuraTarifaria(estructuraTarifaria);
    _this.getView().loadRecord(_this.getEstructuraTarifaria());
    if (_this.getEstructuraTarifariaService().isNewEstructuraTarifaria(estructuraTarifaria)) {
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
    this.getView().getForm().updateRecord(this.getEstructuraTarifaria());
    return this.saveEstructuraTarifaria(this.getEstructuraTarifaria());
  },
 
  saveEstructuraTarifaria: function(estructuraTarifaria) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getEstructuraTarifariaService().saveEstructuraTarifaria(estructuraTarifaria).then({
      success: function(res) {
        _this.getView().setTitle('Datos de la Estructura Tarifaria');
        _this.getCopyButton().setVisible(true);
        _this.getEditButton().setVisible(true);
        _this.getSaveButton().setVisible(false);
        _this.getCancelButton().setVisible(false)
        _this.getView().setSoloLecturaTodos(true);
        _this.getEstructuraTarifariaContext().estructuraTarifariaCreated();
        return _this.getNotificationService().success("Guardar ", res.msg);
      },
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Guardar ", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
 
  onCopyButtonClick: function() {
    var copyOfEstructuraTarifaria;
    copyOfEstructuraTarifaria = this.getEstructuraTarifaria().copy();
    copyOfEstructuraTarifaria.set('EstructuraTarifariaId', null);
    return this.onEstructuraTarifariaOpened(copyOfEstructuraTarifaria);
  },

  onCancelButtonClick: function(){
    var _this = this;
    _this.getView().loadRecord(_this.getEstructuraTarifaria());
    if (_this.getEstructuraTarifariaService().isNewEstructuraTarifaria(_this.getEstructuraTarifaria())) {
      _this.getEditButton().setVisible(false);
      _this.getCopyButton().setVisible(false);
    }else{
      _this.getCopyButton().setVisible(true);
      _this.getEditButton().setVisible(true);
    }
    _this.getCancelButton().setVisible(false);
    _this.getSaveButton().setVisible(false);
    _this.getView().setSoloLecturaTodos(true);
    _this.getEstructuraTarifariaContext().estructuraTarifariaCanceled();
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
