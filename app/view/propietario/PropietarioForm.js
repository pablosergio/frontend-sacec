/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.propietario.PropietarioForm", {
    extend: "sacec.view.abstract.AbstractBaseForm",
    alias: "widget.sacec-view-propietario-form",
    //controller: "sacec.controller.propietario.PropietarioFormController",
    layout: "anchor",
    anchor: "100% 100%",
    initComponent: function () {
        var _this = this;
        _this.modeloStore = new store();

        Ext.apply(this, {
            bodyStyle: {
                background: '#F0F4F9',
                font: '12px Georgia, "Times New Roman", Times, serif',
                color: '#888',
                border:'1px solid #E4E4E4'
              },
            labelStyle: 'font-weight:bold;font-size:10px!important;',
            iconCls: 'server_add',
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos Generales",
                    collapsible: false,
                    layout: "column",
                    columns: 2,
                    margin: 20,
                    items: [
                        {
                            xtype: "combobox",
                            name: "modelo",
                            fieldLabel: "Modelo",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: _this.modeloStore,
                            displayField: "valor",
                            valueField: "valor",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10
                        }, {
                            xtype: "textfield",
                            name: "modelo",
                            fieldLabel: "Modelo",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            plugins: ['clearbutton', 'uppertextfield'],
                            allowBlank: false,
                            fieldStyle: 'text-transform:uppercase',
                            maxLength: 30,
                            enforceMaxLength: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "0 0 10 0"
                        },  {
                            xtype: "textfield",
                            name: "serie",
                            fieldLabel: "Serie",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            plugins: ['clearbutton'],
                            //allowBlank: false,
                            fieldStyle: 'text-transform:uppercase',
                            maxLength: 50,
                            enforceMaxLength: true,
                            //afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "0 0 10 0"
                        }, {
                            xtype: "textarea",
                            name: "desc_modelo",
                            fieldLabel: "Descripcion Modelo",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            fieldStyle: 'text-transform:uppercase',
                            maxLength: 150,
                            enforceMaxLength: true,
                            plugins: ['clearbutton', 'uppertextfield'],
                            height: 50,
                            grow: true,
                            margin: "0 0 10 0"
                        }
                    ]
                }, {
                    xtype: "fieldset",
                    title: "Caracteristicas Técnicas",
                    collapsible: false,
                    columns: 2,
                    margin: 20,
                    minHeight: 250,
                    layout: "column",
                    items: [
                        {
                            xtype: "numberfield",
                            name: "incertidumbre",
                            fieldLabel: "Incertidumbre",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            minValue: 0,
                            maxValue: 99999.99,
                            maxLength: 8,
                            enforceMaxLength: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "5 0 10 0"
                        }, {
                            xtype: "combobox",
                            name: "clase",
                            fieldLabel: "Clase",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: this.getListaClasePatronTrabajo().load({params: {condicion: 'CLASE_PATRON'}}),
                            queryMode: "local",
                            displayField: "valor",
                            valueField: "valor",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "5 0 10 0"
                        }, {
                            xtype: "textfield",
                            name: "nro_certificado_cal",
                            fieldLabel: "Nro. Certificado Cal.",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            fieldStyle: 'text-transform:uppercase',
                            maxLength: 50,
                            enforceMaxLength: true,
                            plugins: ['clearbutton', 'uppertextfield'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "0 0 10 0"
                        }, {
                            xtype: "datefield",
                            name: "fecha_certificado_cal",
                            fieldLabel: "Fecha Certificado Cal.",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "0 0 10 0"
                        },  {
                            xtype: "numberfield",
                            name: "decimales",
                            fieldLabel: "Candidad Decimales",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            maxValue: 99,
                            enforceMaxLength: true,
                            maxLength: 2,
                            margin: "0 0 10 0"
                        }, {
                            xtype: "combobox",
                            itemId: "comboEstado",
                            name: "estado",
                            fieldLabel: "Estado",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: this.getListaEstado().load({params: {condicion: 'ESTADOS_MOD'}}),
                            queryMode: "local",
                            displayField: "valor",
                            valueField: "valor",
                            emptyText: "Seleccionar...",
                            //plugins: ['clearbutton'],
                            forceSelection: true,
                            margin: "0 0 10 0"
                        }
                    ]
                }
            ]
        });
        return this.callParent(arguments);
    }
});
