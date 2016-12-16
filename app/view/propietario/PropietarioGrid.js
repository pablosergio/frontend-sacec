/**
 * Created by palvarado on 12/12/2016.
 */

Ext.define("sacec.view.propietario.PropietarioGrid", {
    extend: "sacec.view.abstract.AbstractBaseGrid",
    alias: "widget.sacec-view-propietario-grid",
    controller: "sacec.controller.propietario.PropietarioGridController",
    inject: ["propietarioStore"],
    config: {
        propietarioStore: null
    },
    initComponent: function() {
        var _this = this;
        Ext.apply(this, {
            title: "Propietarios",
            iconCls: 'user_suit',
            store: this.getPropietarioStore(),
            columns: [
                {
                    header: "Nombre",
                    dataIndex: "nombre",
                    flex: 1,
                    renderer: function(value, metaData, record, row, col, store, gridView) {
                        metaData.tdAttr = "data-qtip='" + value + "'";
                        return value;
                    }
                }, {
                    header: "Apellido",
                    dataIndex: "apellido",
                    flex: 1,
                },  {
                    header: "Celular",
                    dataIndex: "celular",
                    flex: 1
                    
                }, {
                    header: "Telefono",
                    dataIndex: "telefono",
                    flex: 1
                }, {
                    header: "E-mail",
                    dataIndex: "email",
                    flex: 1
                }
            ]
        });
        return this.callParent(arguments);
    },


});
