/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define('sacec.view.egreso.EgresoBaseGrid', {
    extend: 'Ext.grid.Panel',
    requires: ["Ext.ux.form.field.ClearButton", "Ext.grid.column.Number", "Ext.grid.column.Date", "Ext.grid.column.Action", "Ext.ux.grid.Printer", "sacec.view.reports.ReportsPDF"],
    alias: 'widget.sacec-view-egreso-base-grid',
    columnLines: true,
    viewConfig: {
        stripeRows: true,
        emptyText: "<div class='x-grid-empty-custom'>Todavia no existen registros</div>",
        deferEmptyText: false,
        /*getRowClass: function (record, index) {
            if (record.get('estado') === 'DEBE')
                return 'trabajo-rechazado';
            if (record.get('estado') === 'PAGADO') {
                return 'trabajo-success';
            }
            
        }*/
    },
    initComponent: function () {
        var me = this;
        me.listaTipoEgreso = Ext.create("sacec.store.lista.ListaStore", { pageSize: 50 });
        me.listaTipoEgreso.proxy.extraParams = { tipo: 'EGRESOS'};
        me.plugins = [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1,
                pluginsId: 'cellplugin'
            })
        ];

        me.features = [
            Ext.create('Ext.ux.grid.FiltersFeature', {
                local: true
            })
        ];

        me.textoFiltrado = Ext.widget('component', {
            html: "<span style=color:orange;>(Filtro Aplicado)</span>",
            itemId: 'textoFiltrado',
            hidden: true
        });

        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                itemId: 'topToolbar',
                items: [
                    {
                        xtype: 'tbseparator'
                    }, {
                        xtype: 'button',
                        itemId: 'btnAdd',
                        text: 'Nuevo Egreso',
                        iconCls: 'add',
                        scale: 'medium'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnImprimirRecibo',
                        text: 'Egreso',
                        iconCls: 'impresora',
                        scale: 'medium',
                    },
                    {
                        xtype: 'tbseparator'
                    }, {
                        xtype: 'combobox',
                        itemId: 'comboTipoEgreso',
                        fieldLabel: "Tipo Egreso",
                        labelAlign: 'right',
                        labelWidth: 120,
                        labelStyle: 'font-weight:bold;font-size:10px!important;',
                        store: me.listaTipoEgreso.load(),
                        displayField: "descripcion",
                        valueField: "descripcion",
                        emptyText: "Seleccionar...",
                        forceSelection: true,
                        queryMode: 'local',
                        plugins: ['clearbutton'],
                        width: 300,
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'filterGrid',
                        text: 'Busar...',
                        iconCls: 'zoom',
                        margin: "0 0 0 10"
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: 'Quitar Filtros',
                        iconCls: 'filter_delete',
                        margin: "0 0 0 0"
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: me.textoFiltrado
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'tbfill'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'exportPdf',
                        text: 'PDF',
                        iconCls: 'pdf-document',
                        handler: function () {
                            sacec.view.reports.ReportsPDF.export(me);
                        }
                    },
                    {
                        xtype: 'button',
                        itemId: 'printGrid',
                        text: 'Imprimir',
                        iconCls: 'printer',
                        handler: function () {
                            Ext.ux.grid.Printer.printAutomatically = false;
                            Ext.ux.grid.Printer.print(me);
                        }
                    }
                ]
            }, {
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                store: this.store,
                displayInfo: true
            }
        ];

        me.columns = Ext.Array.merge([
            {
                xtype: "rownumberer",
                width: 30,
                text: 'Nro',
                sortable: false
            }
        ], me.columns, [
            /*{
                text: 'Usuario',
                width: 90,
                align: 'center',
                dataIndex: 'login_usr',
            },*/
            {
                xtype: 'datecolumn',
                text: 'Fecha Registro',
                width: 120,
                dataIndex: 'fechaRegistro',
                format: 'd-m-Y H:i',
                filter: true,
                align: 'center'
            }, {
                xtype: "actioncolumn",
                itemId: "deleteActionColumn",
                text: "Eliminar",
                width: 50,
                align: "center",
                sortable: false,
                items: [{
                  itemId: "recordDeleteButton",
                  icon: "resources/icons/delete.png",
                  tooltip: "Delete Scenario",
                  iconCls: "mousepointer .x-grid-center-icon"
                 }]
             } 
        ]);

        me.callParent(arguments);
    },

    filtrarGrid: function (parametros) {
        var me = this;
        me.store.load({params: parametros});
    }
})