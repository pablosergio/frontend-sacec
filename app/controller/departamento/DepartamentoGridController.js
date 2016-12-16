/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.departamento.DepartamentoGridController", {
  extend: "sacec.controller.AbstractBaseGridController",
  //requires: ['sacec.view.Departamento.DepartamentoFiltroForm'],
  inject: [
    "departamentoContext",
    "departamentoService"
  ],
  config:{
    departamentoContext: null,
    departamentoService: null,
    departamento: null,
  },
  observe: {
    departamentoContext: {
      departamentoCreated: "loadInitialData"
    }
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getDepartamentoService().loadDepartamentos({}).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },

  loadDepartamentos: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getDepartamentoService().loadDepartamentos({ estado: 'ACTIVO' }).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  
  
  onAddRecordClick: function() {
    var nuevoDepartamento = Ext.create("sacec.model.departamento.Departamento", {
      estado: 'ACTIVO'
    });
    return this.getDepartamentoContext().departamentoOpened(nuevoDepartamento);
  },
  
  onSelectRecord: function(grid, departamento, row, rowIndex, event) {
    this.setDepartamento(departamento);
    return this.getDepartamentoContext().departamentoOpened(departamento);
  },

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, departamento, row){
    var _this = this;
    /*if (this.getDepartamento).get('departamento') !== null) {
            return this.getNotificationService().info('Informacion', 'Acutalizar dempartamento');
        }*/

    return Ext.MessageBox.confirm("Confirmar", "¿Esta seguro de eliminar el registro?", function (button) {
            if (button === "yes") {
                return this.deleteDepartamento(departamento);
            }
        }, this);
  },

  deleteDepartamento: function (departamento) {
        var _this = this;
        _this.getView().getStore().remove(departamento);
        _this.getView().getStore().sync({
            success: function () {
                _this.loadInitialData();
                _this.getDepartamentoContext().departamentoDeleted(departamento);
                return _this.getNotificationService().success('Eliminar ', 'El registro fue eliminado correctamente');
            },
            failure: function (batch, options) {
                _this.loadInitialData();
                return _this.getNotificationService().error('Eliminar ', 'Ha ocurrido un error al intentar eliminar el registro');
            },
            scope: this

        });
    },

  onFilterGridClick: function(){
    _this = this;
    var filterWindow = Ext.widget('sacec-abstract-filter-window', {
      width: 640,
      title: 'Filtrar Departamentos',
      grid: _this.getView()
    });
    var filtroForm = Ext.widget('sacec-view-filtro--departamento-form'); 
    filterWindow.add(filtroForm);
    filtroForm.setAllowBlankTodos(true);
    filterWindow.show();
  },

 /*Funcion para realizar la busqueda del historico del registro*/
   onHistoryGridClick: function(){
      var _this = this;
      if(_this.getDepartamento()!=null)
      {
        _this.mostrarHistoricos(_this.getDepartamento().get('id_obj'), "obj_patrones_trabajo");
      }else
      {
        Ext.MessageBox.alert('Alerta','Debe seleccionar un registro para ver el historico.');
      }
    }
  
});
