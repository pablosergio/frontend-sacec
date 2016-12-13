/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.departamento.DepartamentoGrid", {
    extend: "sglm.view.abstract.AbstractGrid",
    alias: "widget.sglm-view-departamento-grid",
    //controller: "sglm.controller.departamento.DepartamentoGridController",
    inject: ["departamentoStore"],
    config: {
        departamentoStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Medidores",
            store: this.getDepartamentoStore(),
            columns: [
                {
                    header: "Tipo Medidor",
                    dataIndex: "tipo_medidor",
                    width: 145,
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }, {
                    header: "Medidor Caja",
                    dataIndex: "med_por_caja",
                    width: 90,
                },  {
                    header: "Tension (V)",
                    dataIndex: "tension_nominal",
                    width: 90,
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value + ' V';
                    }
                }, {
                    header: "Corriente</br>Nominal (A)",
                    dataIndex: "corriente_nominal",
                    width: 90,
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value + ' A';
                    }
                }, {
                    header: "Corriente</br>Maxima (A)",
                    dataIndex: "corriente_maxima",
                    width: 90,
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value + ' A';
                    }
                }, {
                    xtype: "numbercolumn",
                    header: "Frecuencia (Hz)",
                    dataIndex: "frecuencia",
                    width: 85,
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value + ' Hz';
                    }
                }, {
                    xtype: "numbercolumn",
                    header: "Nº Elementos",
                    dataIndex: "nro_elementos",
                    format: '0',
                    width: 85,
                }, {
                    xtype: "numbercolumn",
                    header: "Nº Hilos",
                    dataIndex: "nro_hilos",
                    format: '0',
                    width: 80
                },  {
                    header: "Nro. Fases",
                    dataIndex: "nro_fases",
                    width: 85,
                }, {
                    header: "Tipo Suministro",
                    dataIndex: "tipo_suministro",
                    width: 85,
                }, {
                    header: "Clase Energia</br>Activa (%)",
                    dataIndex: "clase_energia_act",
                    width: 90,
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value + ' %';
                    }
                }, {
                    header: "Clase Energia</br> Reactiva (%)",
                    dataIndex: "clase_energia_react",
                    width: 90,
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value + ' %';
                    }
                }, {
                    header: "Demandimetro",
                    dataIndex: "demandimetro",
                    width: 80,
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value;
                    }
                }, {
                    header: "Constante",
                    dataIndex: "constante",
                    width: 80,
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value;
                    }
                }, {
                    header: "Unidad</br>Constante",
                    dataIndex: "unid_constante",
                    width: 80,
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value;
                    }
                }, {
                    header: "Norma Referencia",
                    dataIndex: "norma_referencia",
                    width: 100,
                    align: 'center',
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value;
                    }
                }, {
                    header: "Procedimiento",
                    dataIndex: "procedimiento",
                    width: 90,
                    align: 'center',
                    renderer: function(value, metaData, record) {
                        metaData.tdCls = value;
                        return value;
                    }
                },
            ]
        });
        return this.callParent(arguments);
    },


});
