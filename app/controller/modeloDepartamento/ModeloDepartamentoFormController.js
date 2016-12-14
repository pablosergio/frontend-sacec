/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.modeloDepartamento.ModeloDepartamentoFormController", {
  extend: "sacec.controller.AbstractBaseFormController",
  inject: [
    "modeloDepartamentoContext",
    "modeloDepartamentoService"
  ],
  config:{
    modeloDepartamentoContext: null,
    modeloDepartamentoService: null,
    modeloDepartamento: null
  },
  observe: {
     modeloDepartamentoContext: {
        modeloDepartamentoOpened: "onModeloDepartamentoOpened"  
     }
  },
  init: function() {
    return this.callParent(arguments);
  },
 
  
  onModeloDepartamentoOpened: function(modeloDepartamento) {
    var _this = this;
    _this.getView().getForm().reset();
    _this.getView().setTitle('Datos del Modelo');
    _this.setModeloDepartamento(modeloDepartamento);
    _this.getView().loadRecord(_this.getModeloDepartamento());
    if (_this.getModeloDepartamentoService().isNewModeloDepartamento(modeloDepartamento)) {
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
    this.getView().getForm().updateRecord(this.getModeloDepartamento());
    return this.saveModeloDepartamento(this.getModeloDepartamento());
  },
 
  saveModeloDepartamento: function(modeloDepartamento) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getModeloDepartamentoService().saveModeloDepartamento(modeloDepartamento).then({
      success: function(res) {
        _this.getView().setTitle('Datos del Modelo');
        _this.getCopyButton().setVisible(true);
        _this.getEditButton().setVisible(true);
        _this.getSaveButton().setVisible(false);
        _this.getCancelButton().setVisible(false)
        _this.getView().setSoloLecturaTodos(true);
        _this.getModeloDepartamentoContext().modeloDepartamentoCreated();
        return _this.getNotificationService().success("Guardar Modelo", res.msg);
      },
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Guardar Modelo", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
 
  onCopyButtonClick: function() {
    var copyOfModeloDepartamento;
    copyOfModeloDepartamento = this.getModeloDepartamento().copy();
    copyOfModeloDepartamento.set('modeloDepartamentoId', null);
    return this.onModeloDepartamentoOpened(copyOfModeloDepartamento);
  },

  onCancelButtonClick: function(){
    var _this = this;
    _this.getView().loadRecord(_this.getModeloDepartamento());
    if (_this.getModeloDepartamentoService().isNewModeloDepartamento(_this.getModeloDepartamento())) {
      _this.getEditButton().setVisible(false);
      _this.getCopyButton().setVisible(false);
    }else{
      _this.getCopyButton().setVisible(true);
      _this.getEditButton().setVisible(true);
    }
    _this.getCancelButton().setVisible(false);
    _this.getSaveButton().setVisible(false);
    _this.getView().setSoloLecturaTodos(true);
    _this.getModeloDepartamentoContext().modeloDepartamentoCanceled();
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
