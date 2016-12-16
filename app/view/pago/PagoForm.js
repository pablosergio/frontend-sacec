/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.pago.PagoForm", {
    extend: "sacec.view.pago.PagoBaseForm",
    alias: "widget.sacec-view-pago-form",
    controller: "sacec.controller.pago.PagoFormController",
    layout: "anchor",
    anchor: "100% 100%",
    initComponent: function () {
        var _this = this;
        Ext.apply(this, {
            bodyStyle: {
                background: '#F0F4F9',
                font: '12px Georgia, "Times New Roman", Times, serif',
                color: '#888',
                border:'1px solid #E4E4E4'
              },
            labelStyle: 'font-weight:bold;font-size:10px!important;',
            title: null,
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos del Departamento",
                    collapsible: false,
                    margin: 20,
                    items: [
                        {
                            xtype: "textfield",
                            name: "nombre",
                            fieldLabel: "Departamento",
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            readOnly: true,
                            readOnlyCls: 'DisabledClase',
                            disabledCls: 'DisabledClase',
                        }, {
                            xtype: "textfield",
                            name: "tipo",
                            fieldLabel: "Modelo",
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            readOnly: true,
                            readOnlyCls: 'DisabledClase',
                            disabledCls: 'DisabledClase',
    
                        }
                    ]
                },
                {
                    xtype: "fieldset",
                    title: "Datos del Pago",
                    collapsible: false,
                    margin: 20,
                    items: [
                        {
                            xtype: "textfield",
                            name: "precio",
                            fieldLabel: "Cantidad a Pagar (Bs.)",
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            readOnly: true,
                            readOnlyCls: 'DisabledClase',
                            disabledCls: 'DisabledClase',
                        }, {
                            xtype: "textfield",
                            name: "mes",
                            fieldLabel: "Mes",
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            readOnly: true,
                            readOnlyCls: 'DisabledClase',
                            disabledCls: 'DisabledClase',
                        }, {
                            xtype: "datefield",
                            name: "fechaRegistro",
                            fieldLabel: "Fecha de Pago",
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                        }, {
                            xtype: "textfield",
                            itemId: 'fieldPagadoPor',
                            name: "pagadoPor",
                            fieldLabel: "Pagado Por",
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: 10,
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                        }, {
                            xtype: 'textareafield',
                            grow : true,
                            name : 'observacion',
                            itemId: 'fieldObservacion',
                            fieldLabel: 'Observacion',
                            labelAlign: 'right',
                            labelWidth: 140,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            margin: "10 10 20 10"
                        }  
                    ]
                }
            ]
        });
        return this.callParent(arguments);
    }
});
