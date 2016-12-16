/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.deuda.DeudaExpensasGrid", {
    extend: "sacec.view.deuda.DeudaBaseGrid",
    alias: "widget.sacec-view-deuda-expensas-grid",
    controller: "sacec.controller.deuda.DeudaExpensasGridController",
    inject: ["deudaStore"],
    config: {
        deudaStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Deudas Expensas",
            iconCls: 'calendar_list',
            store: this.getDeudaStore(),
            columns: [
                {
                    header: "Departamento",
                    dataIndex: "departamentoId",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return record.get('departamento').nombre;
                    }
                }, {
                    header: "Propietario",
                    dataIndex: "departamentoId",
                    flex: 2,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return record.get('departamento').propietario.nombre + ' ' + record.get('departamento').propietario.apellido;
                    }
                }, {
                    header: "Mes",
                    dataIndex: "mes",
                    flex: 1,
                    align: 'center'
                }, {
                    header: "Deuda (Bs.)",
                    dataIndex: "precio",
                    flex: 1,
                    align: 'center',
                    renderer: function (value, metaData, record, row, col, store, gridView) {
                        return value;
                    }
                }, {
                    header: "Estado",
                    dataIndex: "estado",
                    flex: 1,
                    align: 'center',
                    renderer: function (value, metaData, record, row, col, store, gridView) {
                        var color = value == 'PAGADO' ? 'green' : 'red';
                        metaData.style = 'color: ' + color;
                        return value;
                    }
                }
            ]
        });
        return this.callParent(arguments);
    },


});
