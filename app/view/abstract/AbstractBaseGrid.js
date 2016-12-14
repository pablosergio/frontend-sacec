/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define('sacec.view.abstract.AbstractBaseGrid', {
    extend: 'Ext.grid.Panel',
    requires: ["Ext.grid.column.Number", "Ext.grid.column.Date", "Ext.grid.column.Action", "Ext.ux.grid.Printer", "sacec.view.reports.ReportsPDF"],
    alias: 'widget.sacec-view-abstract-base-grid',
    columnLines: true,
    viewConfig: {
        stripeRows: true,
        emptyText: "<div class='x-grid-empty-custom'>Todavia no existen registros</div>",
        deferEmptyText: false
    },
    initComponent: function () {
        var me = this;

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
                        itemId: 'addRecord',
                        text: 'Nuevo',
                        iconCls: 'add'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'filterGrid',
                        text: 'Filtrar',
                        glyph: 0xf0b0,
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: 'Quitar Filtros',
                        iconCls: 'filter_delete',
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: me.textoFiltrado
                    },
                    {
                        xtype: 'button',
                        itemId: 'historyRecord',
                        text: 'Historico',
                        iconCls: 'clock'
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
                            sglm.view.reports.ReportsPDF.export(me);
                        }
                    },
                    {
                        xtype: 'button',
                        itemId: 'exportXls',
                        text: 'XLS',
                        iconCls: 'excel-icon',
                        handler: function () {
                            //me = grid puede estar definido en las siguientes variables me this _this _mainThis etc
                            Ext.ux.grid.Printer.export(me);
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
            },
            /*{
                text: 'Estado',
                width: 80,
                align: 'center',
                dataIndex: 'estado',
            },*/
            {
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