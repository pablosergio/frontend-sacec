/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.modeloDepartamento.ModeloDepartamentoGrid", {
    extend: "sacec.view.abstract.AbstractBaseGrid",
    alias: "widget.sacec-view-modelo-departamento-grid",
    controller: "sacec.controller.modeloDepartamento.ModeloDepartamentoGridController",
    inject: ["modeloDepartamentoStore"],
    config: {
        modeloDepartamentoStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Modelo Departamentos",
            store: this.getModeloDepartamentoStore(),
            columns: [
                {
                    header: "Tipo",
                    dataIndex: "tipo",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }, {
                    header: "Superficie",
                    dataIndex: "superficie",
                    flex: 1,
                    align: 'center',
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value + ' m2';
                    }
                },  {
                    header: "Dormitorios",
                    dataIndex: "dormitorios",
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
