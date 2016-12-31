/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.egreso.EgresoForm", {
    extend: "sacec.view.abstract.AbstractBaseForm",
    alias: "widget.sacec-view-egreso-form",
    controller: "sacec.controller.egreso.EgresoFormController",
    layout: "anchor",
    anchor: "100% 100%",
    initComponent: function () {
        var _this = this;
        _this.listaTipoEgreso = Ext.create("sacec.store.lista.ListaStore", { pageSize: 50 });
        _this.listaTipoEgreso.proxy.extraParams = { tipo: 'EGRESOS'};
        
        _this.fieldDescripcion = Ext.widget('hiddenfield', {
            name: 'descripcion'
        });

        Ext.apply(this, {
            bodyStyle: {
                background: '#F0F4F9',
                font: '12px Georgia, "Times New Roman", Times, serif',
                color: '#888',
                border:'1px solid #E4E4E4'
              },
            labelStyle: 'font-weight:bold;font-size:10px!important;',
            iconCls: 'cart_edit',
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos del Egreso",
                    collapsible: false,
                    margin: 20,
                    items: [
                        {
                            xtype: "combobox",
                            name: "tipoEgreso",
                            fieldLabel: "Tipo Pago",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: _this.listaTipoEgreso.load(),
                            displayField: "descripcion",
                            valueField: "tipo",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            width: 400,
                            listeners: {
                                select: function(cbx, records){
                                    var record = records[0];
                                    _this.fieldDescripcion.setValue(record.get('descripcion'));  
                                }
                            }
                        }, {
                            xtype: "datefield",
                            name: "fechaEgreso",
                            fieldLabel: "Fecha del Egreso",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                        },
                        {
                            xtype: _this.fieldDescripcion
                        }, {
                            xtype: "textfield",
                            name: "totalEgreso",
                            fieldLabel: "Monto Egreso (Bs.)",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            maskRe: /[\d\.]/,
                            regex: /^\d+(\.\d{1,2})?$/,
                        }, {
                            xtype: "textfield",
                            name: "numeroComprobante",
                            fieldLabel: "Numero Comprobante",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            margin: "10 10 20 10",
                        }, {
                            xtype: 'textareafield',
                            grow : true,
                            name : 'observacion',
                            fieldLabel: 'Observaciones',
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            width: 400,
                            margin: "10 10 20 10"
                        } 
                    ]
                } 
            ]
        });
        return this.callParent(arguments);
    }
});
