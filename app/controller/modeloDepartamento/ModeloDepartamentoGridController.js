/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.modeloDepartamento.ModeloDepartamentoGridController", {
  extend: "sacec.controller.AbstractBaseGridController",
  //requires: ['sacec.view.modeloDepartamento.ModeloDepartamentoFiltroForm'],
  inject: [
    "modeloDepartamentoContext",
    "modeloDepartamentoService"
  ],
  config:{
    modeloDepartamentoContext: null,
    modeloDepartamentoService: null,
    modeloDepartamento: null,
  },
  observe: {
    modeloDepartamentoContext: {
      modeloDepartamentoCreated: "loadInitialData"
    }
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getModeloDepartamentoService().loadModeloDepartamentos({estado: 'ACTIVO'}).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },

  loadModeloDepartamentos: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getModeloDepartamentoService().loadModeloDepartamentos({ estado: 'ACTIVO' }).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  
  
  onAddRecordClick: function() {
    var nuevoModeloDepartamento = Ext.create("sacec.model.modeloDepartamento.ModeloDepartamento", {
      estado: 'ACTIVO'
    });
    return this.getModeloDepartamentoContext().modeloDepartamentoOpened(nuevoModeloDepartamento);
  },
  
  onSelectRecord: function(grid, modeloDepartamento, row, rowIndex, event) {
    this.setModeloDepartamento(modeloDepartamento);
    return this.getModeloDepartamentoContext().modeloDepartamentoOpened(modeloDepartamento);
  },

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, modeloDepartamento, row){
    var _this = this;
    /*if (this.getmodeloDepartamento).get('departamento') !== null) {
            return this.getNotificationService().info('Informacion', 'Acutalizar dempartamento');
        }*/

    return Ext.MessageBox.confirm("Confirmar", "¿Esta seguro de eliminar el registro?", function (button) {
            if (button === "yes") {
                return this.deleteModeloDepartamento(modeloDepartamento);
            }
        }, this);
  },

  deleteModeloDepartamento: function (modeloDepartamento) {
        var _this = this;
        _this.getView().getStore().remove(modeloDepartamento);
        _this.getView().getStore().sync({
            success: function () {
                _this.loadInitialData();
                _this.getModeloDepartamentoContext().modeloDepartamentoDeleted(modeloDepartamento);
                return _this.getNotificationService().success('Eliminar Modelo', 'El registro fue eliminado correctamente');
            },
            failure: function (batch, options) {
                _this.loadInitialData();
                return _this.getNotificationService().error('Eliminar Modelo', 'Ha ocurrido un error al intentar eliminar el registro');
            },
            scope: this

        });
    },

  onFilterGridClick: function(){
    _this = this;
    var filterWindow = Ext.widget('sacec-abstract-filter-window', {
      width: 640,
      title: 'Filtrar modeloDepartamentos',
      grid: _this.getView()
    });
    var filtroForm = Ext.widget('sacec-view-filtro-modelo-departamento-form'); 
    filterWindow.add(filtroForm);
    filtroForm.setAllowBlankTodos(true);
    filterWindow.show();
  },

 /*Funcion para realizar la busqueda del historico del registro*/
   onHistoryGridClick: function(){
      var _this = this;
      if(_this.getmodeloDepartamento()!=null)
      {
        _this.mostrarHistoricos(_this.getmodeloDepartamento().get('id_obj'), "obj_patrones_trabajo");
      }else
      {
        Ext.MessageBox.alert('Alerta','Debe seleccionar un registro para ver el historico.');
      }
    }
  
});
