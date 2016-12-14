/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.estructuraTarifaria.EstructuraTarifariaGrid", {
    extend: "sacec.view.abstract.AbstractBaseGrid",
    alias: "widget.sacec-view-estructura-tarifaria-grid",
    controller: "sacec.controller.estructuraTarifaria.EstructuraTarifariaGridController",
    inject: ["estructuraTarifariaStore"],
    config: {
        estructuraTarifariaStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Estructura Tarifaria",
            store: this.getEstructuraTarifariaStore(),
            columns: [
                {
                    header: "Tarifa",
                    dataIndex: "tipoTarifa",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                },  {
                    header: "Gestion",
                    dataIndex: "gestion",
                    flex: 1,
                    align: 'center',
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
                    header: "Precio",
                    dataIndex: "precio",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value + ' Bs';
                    }
                }, {
                    header: "Descripcion",
                    dataIndex: "descripcion",
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
