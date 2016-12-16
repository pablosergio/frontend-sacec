/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.egreso.EgresoGrid", {
    extend: "sacec.view.egreso.EgresoBaseGrid",
    alias: "widget.sacec-view-egreso-grid",
    controller: "sacec.controller.egreso.EgresoGridController",
    inject: ["egresoStore"],
    config: {
        egresoStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Egresos/Gastos",
            iconCls: 'cart',
            store: _this.getEgresoStore(),
            columns: [
                {
                    header: "Tipo Egreso",
                    dataIndex: "descripcion",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }, {
                    header: "Monto Egresado (Bs.)",
                    dataIndex: "totalEgreso",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }, {
                    header: "Nro. Comprobante",
                    dataIndex: "numeroComprobante",
                    flex: 1,
                    align: 'center',
                    
                }, {
                    header: "Observaciones",
                    dataIndex: "observacion",
                    flex: 2,
                    align: 'center',
                    
                }
            ]
        });
        return this.callParent(arguments);
    },


});
