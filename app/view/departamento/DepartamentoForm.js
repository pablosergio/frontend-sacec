/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.departamento.DepartamentoForm", {
    extend: "sacec.view.abstract.AbstractBaseForm",
    alias: "widget.sacec-view-departamento-form",
    controller: "sacec.controller.departamento.DepartamentoFormController",
    layout: "anchor",
    anchor: "100% 100%",
    initComponent: function () {
        var _this = this;
        _this.modeloDepartamentoStore = Ext.create("sacec.store.modeloDepartamento.ModeloDepartamentoStore");
        _this.propietarioStore = Ext.create("sacec.store.propietario.PropietarioStore", { pageSize: 50 })
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
                    title: "Datos del Departamento",
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
                            margin: 10,
                            maxLength: 50,
                            enforceMaxLength: true,
                            //width: 400
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
                            xtype: "combobox",
                            name: "propietarioId",
                            fieldLabel: "Propietario",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            store: _this.propietarioStore.load(),
                            queryMode: 'local',
                            displayField: "nombre",
                            valueField: "propietarioId",
                            emptyText: "Seleccionar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            forceSelection: true,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: 10,
                            width: 400,
                            tpl: ['<tpl for =".">',
                                  '<div class="x-boundlist-item">',
                                    '<font color="0e2f44" size= 2.0em">Nombre: {nombre} {apellido}</font></br>',
                                    '<strong>Celuar:</strong> {celular}</br>',
                                    '<strong>E-mail:</strong> {email}</br>',
                                  '</div>',
                                  '</tpl>'].join('')
                        }, {
                            xtype: "numberfield",
                            name: "cantidadHabitantes",
                            fieldLabel: "Habitantes",
                            labelAlign: 'right',
                            labelWidth: 120,
                            labelStyle: 'font-weight:bold;font-size:10px!important;',
                            emptyText: "Ingresar...",
                            plugins: ['clearbutton'],
                            allowBlank: false,
                            afterLabelTextTpl: this.getRequiredStyle(),
                            margin: "10 10 20 10",
                            minValue: 0,
                            maxValue: 99,
                        } 
                    ]
                } 
            ]
        });
        return this.callParent(arguments);
    }
});
