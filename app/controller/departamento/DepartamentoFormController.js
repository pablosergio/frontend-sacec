/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.departamento.DepartamentoFormController", {
  extend: "sacec.controller.AbstractBaseFormController",
  inject: [
    "departamentoContext",
    "departamentoService"
  ],
  config:{
    departamentoContext: null,
    departamentoService: null,
    departamento: null
  },
  observe: {
     departamentoContext: {
        departamentoOpened: "onDepartamentoOpened"  
     }
  },
  init: function() {
    return this.callParent(arguments);
  },
 
  
  onDepartamentoOpened: function(departamento) {
    var _this = this;
    _this.getView().getForm().reset();
    _this.getView().setTitle('Datos del Departamento');
    _this.setDepartamento(departamento);
    _this.getView().loadRecord(_this.getDepartamento());
    if (_this.getDepartamentoService().isNewDepartamento(departamento)) {
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
    this.getView().getForm().updateRecord(this.getDepartamento());
    return this.saveDepartamento(this.getDepartamento());
  },
 
  saveDepartamento: function(departamento) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getDepartamentoService().saveDepartamento(departamento).then({
      success: function(res) {
        _this.getView().setTitle('Datos del ');
        _this.getCopyButton().setVisible(true);
        _this.getEditButton().setVisible(true);
        _this.getSaveButton().setVisible(false);
        _this.getCancelButton().setVisible(false)
        _this.getView().setSoloLecturaTodos(true);
        _this.getDepartamentoContext().departamentoCreated();
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
    var copyOfDepartamento;
    copyOfDepartamento = this.getDepartamento().copy();
    copyOfDepartamento.set('departamentoId', null);
    return this.onDepartamentoOpened(copyOfDepartamento);
  },

  onCancelButtonClick: function(){
    var _this = this;
    _this.getView().loadRecord(_this.getDepartamento());
    if (_this.getDepartamentoService().isNewDepartamento(_this.getDepartamento())) {
      _this.getEditButton().setVisible(false);
      _this.getCopyButton().setVisible(false);
    }else{
      _this.getCopyButton().setVisible(true);
      _this.getEditButton().setVisible(true);
    }
    _this.getCancelButton().setVisible(false);
    _this.getSaveButton().setVisible(false);
    _this.getView().setSoloLecturaTodos(true);
    _this.getDepartamentoContext().departamentoCanceled();
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
