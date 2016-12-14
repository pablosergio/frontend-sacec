/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.estructuraTarifaria.EstructuraTarifariaGridController", {
  extend: "sacec.controller.AbstractBaseGridController",
  //requires: ['sacec.view.EstructuraTarifaria.EstructuraTarifariaFiltroForm'],
  inject: [
    "estructuraTarifariaContext",
    "estructuraTarifariaService"
  ],
  config:{
    estructuraTarifariaContext: null,
    estructuraTarifariaService: null,
    estructuraTarifaria: null,
  },
  observe: {
    estructuraTarifariaContext: {
      estructuraTarifariaCreated: "loadInitialData"
    }
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getEstructuraTarifariaService().loadEstructuraTarifaria({estado: 'ACTIVO'}).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },

  loadEstructuraTarifarias: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getEstructuraTarifariaService().loadEstructuraTarifaria({ estado: 'ACTIVO' }).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  
  
  onAddRecordClick: function() {
    var nuevoEstructuraTarifaria = Ext.create("sacec.model.estructuraTarifaria.EstructuraTarifaria", {
      estado: 'ACTIVO'
    });
    return this.getEstructuraTarifariaContext().estructuraTarifariaOpened(nuevoEstructuraTarifaria);
  },
  
  onSelectRecord: function(grid, estructuraTarifaria, row, rowIndex, event) {
    this.setEstructuraTarifaria(estructuraTarifaria);
    return this.getEstructuraTarifariaContext().estructuraTarifariaOpened(estructuraTarifaria);
  },

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, estructuraTarifaria, row){
    var _this = this;
    /*if (this.getEstructuraTarifaria).get('EstructuraTarifaria') !== null) {
            return this.getNotificationService().info('Informacion', 'Acutalizar dempartamento');
        }*/

    return Ext.MessageBox.confirm("Confirmar", "¿Esta seguro de eliminar el registro?", function (button) {
            if (button === "yes") {
                return this.deleteEstructuraTarifaria(estructuraTarifaria);
            }
        }, this);
  },

  deleteEstructuraTarifaria: function (estructuraTarifaria) {
        var _this = this;
        _this.getView().getStore().remove(estructuraTarifaria);
        _this.getView().getStore().sync({
            success: function () {
                _this.loadInitialData();
                _this.getEstructuraTarifariaContext().estructuraTarifariaDeleted(estructuraTarifaria);
                return _this.getNotificationService().success('Eliminar', 'El registro fue eliminado correctamente');
            },
            failure: function (batch, options) {
                _this.loadInitialData();
                return _this.getNotificationService().error('Eliminar', 'Ha ocurrido un error al intentar eliminar el registro');
            },
            scope: this

        });
    },

  onFilterGridClick: function(){
    _this = this;
    var filterWindow = Ext.widget('sacec-abstract-filter-window', {
      width: 640,
      title: 'Filtrar EstructuraTarifarias',
      grid: _this.getView()
    });
    var filtroForm = Ext.widget('sacec-view-filtro--EstructuraTarifaria-form'); 
    filterWindow.add(filtroForm);
    filtroForm.setAllowBlankTodos(true);
    filterWindow.show();
  },

 /*Funcion para realizar la busqueda del historico del registro*/
   onHistoryGridClick: function(){
      var _this = this;
      if(_this.getEstructuraTarifaria()!=null)
      {
        _this.mostrarHistoricos(_this.getEstructuraTarifaria().get('id_obj'), "obj_patrones_trabajo");
      }else
      {
        Ext.MessageBox.alert('Alerta','Debe seleccionar un registro para ver el historico.');
      }
    }
  
});
