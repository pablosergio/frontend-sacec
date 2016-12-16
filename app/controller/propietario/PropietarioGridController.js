/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.propietario.PropietarioGridController", {
  extend: "sacec.controller.AbstractBaseGridController",
  requires: ['sacec.view.propietario.PropietarioFiltroForm'],
  inject: [
    "propietarioContext",
    "propietarioService"
  ],
  config:{
    propietarioContext: null,
    propietarioService: null,
    propietario: null,
  },
  observe: {
    propietarioContext: {
      propietarioCreated: "loadInitialData"
    }
  },
  
  init: function() {
    return this.callParent(arguments);
  },
  
  loadInitialData: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getPropietarioService().loadPropietarios({}).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },

  loadPropietarios: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getPropietarioService().loadPropietarios({ estado: 'ACTIVO' }).then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  
  
  onAddRecordClick: function() {
    var nuevoPropietario = Ext.create("sacec.model.propietario.Propietario", {
      modelo: 'Nuevo Propietario',
      estado: 'ACTIVO'
    });
    return this.getPropietarioContext().propietarioOpened(nuevoPropietario);
  },
  
  onSelectRecord: function(grid, propietario, row, rowIndex, event) {
    this.setPropietario(propietario);
    return this.getPropietarioContext().propietarioOpened(propietario);
  },

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, propietario, row){
    var _this = this;
    /*if (this.getPropietario).get('departamento') !== null) {
            return this.getNotificationService().info('Informacion', 'Acutalizar dempartamento');
        }*/

    return Ext.MessageBox.confirm("Confirmar", "¿Esta seguro de eliminar el registro?", function (button) {
            if (button === "yes") {
                return this.deletePropietario(propietario);
            }
        }, this);
  },

  deletePropietario: function (propietario) {
        var _this = this;
        _this.getView().getStore().remove(propietario);
        _this.getView().getStore().sync({
            success: function () {
                _this.loadInitialData();
                _this.getPropietarioContext().propietarioDeleted(propietario);
                return _this.getNotificationService().success('Eliminar Propietario', 'El registro fue eliminado correctamente');
            },
            failure: function (batch, options) {
                _this.loadInitialData();
                return _this.getNotificationService().error('Eliminar Propietario', 'Ha ocurrido un error al intentar eliminar el registro');
            },
            scope: this

        });
    },

  onFilterGridClick: function(){
    _this = this;
    var filterWindow = Ext.widget('sacec-abstract-filter-window', {
      width: 640,
      title: 'Filtrar Propietarios',
      grid: _this.getView()
    });
    var filtroForm = Ext.widget('sacec-view-filtro-propietario-form'); 
    filterWindow.add(filtroForm);
    filtroForm.setAllowBlankTodos(true);
    filterWindow.show();
  },

 /*Funcion para realizar la busqueda del historico del registro*/
   onHistoryGridClick: function(){
      var _this = this;
      if(_this.getpropietario()!=null)
      {
        _this.mostrarHistoricos(_this.getpropietario().get('id_obj'), "obj_patrones_trabajo");
      }else
      {
        Ext.MessageBox.alert('Alerta','Debe seleccionar un registro para ver el historico.');
      }
    }
  
});
