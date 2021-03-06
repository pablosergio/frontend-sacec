/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.departamento.DepartamentoGrid", {
    extend: "sacec.view.abstract.AbstractBaseGrid",
    alias: "widget.sacec-view-departamento-grid",
    controller: "sacec.controller.departamento.DepartamentoGridController",
    inject: ["departamentoStore"],
    config: {
        departamentoStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: " Departamentos",
            store: this.getDepartamentoStore(),
            columns: [
                {
                    header: "Nombre",
                    dataIndex: "nombre",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }, {
                    xtype: 'templatecolumn',
                    header: "Modelo",
                    dataIndex: "modeloDepartamentoId",
                    flex: 1,
                    align: 'left',
                    tpl: '<strong>Tipo:</strong> {modeloDepartamento.tipo}</br>' +
                         '<strong>Superficie:</strong> {modeloDepartamento.superficie}</br>' +
                         '<strong>Dormitorios:</strong> {modeloDepartamento.dormitorios}' 
                }, {
                    xtype: 'templatecolumn',
                    header: "Propietario",
                    dataIndex: "propietarioId",
                    flex: 1,
                    align: 'left',
                    tpl: '<strong>Nombre:</strong> {propietario.nombre} {propietario.apellido}</br>' +
                         '<strong>Celular:</strong> {propietario.celular}</br>' +
                         '<strong>E-mail:</strong> {propietario.email}' 
                }, {
                    header: "Habitantes",
                    dataIndex: "cantidadHabitantes",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }
            ]
        });
        return this.callParent(arguments);
    },


});
