/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.pago.PagoGrid", {
    extend: "sacec.view.pago.PagoBaseGrid",
    alias: "widget.sacec-view-pago-grid",
    controller: "sacec.controller.Pago.PagoGridController",
    inject: ["pagoStore"],
    config: {
        pagoStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Pagos",
            iconCls: 'calendar_list',
            store: this.getPagoStore(),
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
                    header: "Pago (Bs.)",
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
