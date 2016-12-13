/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define("sacec.controller.propietario.PropietarioGridController", {
  extend: "sacec.controller.AbstractBaseGridController",
  //requires: ['sglm.view.administracion.objetoEnsayo.patronTrabajo.FiltroPatronTrabajoForm'],
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
    return this.getPropietarioService().loadPropietarios({estado: 'ACTIVO'}).then({
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
    var nuevopropietario;
    nuevoPropietario = Ext.create("sglm.model.propietario.Propietario", {
      modelo: 'Nuevo Propietario',
      estado: 'ACTIVO'
    });
    return this.getPropietarioContext().propietarioOpened(nuevoPropietario);
  },
  
  onSelectRecord: function(grid, propietario, row, rowIndex, event) {
    this.setPropietario(propietario);
    return this.getPropietarioContext().propietarioOpened(propietario);
  },

  onFilterGridClick: function(){
    _this = this;
    var filterWindow = Ext.widget('sglm-abstract-filter-window', {
      width: 640,
      title: 'Filtrar Objetos de Ensayo Patron Trabajo',
      grid: _this.getView()
    });
    var filtroForm = Ext.widget('sglm-view-filtro-objeto-ensayo-patron-trabajo-form'); 
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
