/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.estructuraTarifaria.EstructuraTarifariaForm", {
    extend: "sacec.view.abstract.AbstractBaseForm",
    alias: "widget.sacec-view-estructura-tarifaria-form",
    controller: "sacec.controller.estructuraTarifaria.EstructuraTarifariaFormController",
    layout: "anchor",
    anchor: "100% 100%",
    initComponent: function () {
        var _this = this;
        _this.modeloDepartamentoStore = Ext.create("sacec.store.modeloDepartamento.ModeloDepartamentoStore");
        //_this.listaTipoTarifa = Ext.create("sacec.store.lista.ListaStore");
        
        Ext.apply(this, {
            bodyStyle: {
                background: '#F0F4F9',
                font: '12px Georgia, "Times New Roman", Times, serif',
                color: '#888',
                border:'1px solid #E4E4E4'
              },
            labelStyle: 'font-weight:bold;font-size:10px!important;',
            iconCls: 'money_dollar',
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos de la Estructura Tarifaria",
                    collapsible: false,
                    margin: 20,
                    items: [
                        {
                            xtype: "combobox",
                            name: "tipoTarifa",
                            fieldLabel: "Tipo Tarifa",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            //store: _this.listaTipoTarifa.load({ params: {}}),
                            displayField: "valor",
                            valueField: "valor",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            width: 400,
                        }, {
                            xtype: "combobox",
                            name: "gestion",
                            fieldLabel: "Gestion",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            //store: _this.listaGestion.load({ params: {}}),
                            displayField: "valor",
                            valueField: "valor",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            width: 400,
                        }, {
                            xtype: "combobox",
                            name: "modeloDepartamentoId",
                            fieldLabel: "Modelo",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: _this.modeloDepartamentoStore.load(),
                            displayField: "tipo",
                            valueField: "modeloDepartamentoId",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            width: 400,
                            tpl: ['<tpl for =".">',
                                  '<div class="x-boundlist-item">',
                                    '<font color="0e2f44" size= 3.0em">Tipo: {tipo}</font></br>',
                                    '<b>Superficie:</b> {superficie}</br>',
                                    '<b>Dormitorios:</b> {dormitorios}</br>',
                                  '</div>',
                                  '</tpl>'].join('')
                        }, {
                            xtype: "textfield",
                            name: "precio",
                            fieldLabel: "Precio",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            maskRe: /[\d\.]/,
                            regex: /^\d+(\.\d{1,2})?$/,
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "10 10 20 10",
                        }, {
                            xtype: 'textareafield',
                            grow : true,
                            name : 'descripcion',
                            fieldLabel: 'Descripcion',
                            labelAlign: 'right',
                            labelWidth: 120,
                            anchor    : '100%'
                        } 
                    ]
                } 
            ]
        });
        return this.callParent(arguments);
    }
});
