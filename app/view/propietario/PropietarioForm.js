/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.propietario.PropietarioForm", {
    extend: "sacec.view.abstract.AbstractBaseForm",
    alias: "widget.sacec-view-propietario-form",
    controller: "sacec.controller.propietario.PropietarioFormController",
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
            iconCls: 'user_suit',
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos del Propietario",
                    collapsible: false,
                    margin: 20,
                    items: [
                        {
                            xtype: "textfield",
                            name: "nombre",
                            fieldLabel: "Nombre",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10
                        }, {
                            xtype: "textfield",
                            name: "apellido",
                            fieldLabel: "Apellido",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10
                        }, {
                            xtype: "textfield",
                            name: "celular",
                            fieldLabel: "Celular",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            regex: /^[\(\)\.\- ]{0,}[0-9]{8}[\(\)\.\- ]{0,}$/,
                            margin: 10
                        }, {
                            xtype: "textfield",
                            name: "telefono",
                            fieldLabel: "Telefono",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            regex: /^[\(\)\.\- ]{0,}[0-9]{7}[\(\)\.\- ]{0,}$/,
                            margin: 10
                        }, {
                            xtype: "textfield",
                            name: "email",
                            fieldLabel: "E-mail",
                            labelAlign: 'right',
                            labelWidth: 120,
                            regex: /^([\w\-\’\-]+)(\.[\w-\’\-]+)*@([\w\-]+\.){1,5}([A-Za-z]){2,4}$/,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            margin: "10 10 20 10"
                        }
                    ]
                } 
            ]
        });
        return this.callParent(arguments);
    }
});
