/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.modeloDepartamento.ModeloDepartamentoForm", {
    extend: "sacec.view.abstract.AbstractBaseForm",
    alias: "widget.sacec-view-modelo-departamento-form",
    controller: "sacec.controller.modeloDepartamento.ModeloDepartamentoFormController",
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
            iconCls: 'server_chart',
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos del Modelo",
                    collapsible: false,
                    margin: 20,
                    items: [
                        {
                            xtype: "combobox",
                            name: "tipo",
                            fieldLabel: "Tipo",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: ['A', 'B', 'C', 'COMERCIAL'],
                            displayField: "value",
                            valueField: "value",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10
                        }, {
                            xtype: "numberfield",
                            name: "superficie",
                            fieldLabel: "Superficie (m2)",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            minValue: 1,
                            maxValue: 999,
                            maxLength: 6,
                            enforceMaxLength: true,
                        }, {
                            xtype: "numberfield",
                            name: "dormitorios",
                            fieldLabel: "Dormitorios",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            margin: 10,
                            minValue: 0,
                            maxValue: 10,
                            maxLength: 2,
                            enforceMaxLength: true,
                        }
                    ]
                } 
            ]
        });
        return this.callParent(arguments);
    }
});
