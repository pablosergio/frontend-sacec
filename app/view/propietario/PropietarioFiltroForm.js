Ext.define("sacec.view.propietario.PropietarioFiltroForm", {
  extend: "sacec.view.propietario.PropietarioForm",
  alias: "widget.sacec-view-filtro-propietario-form",
  layout: "anchor",
  anchor: "100% 100%",
  initComponent: function() {
    var _this = this;
    Ext.apply(this, {
      title: null,
      requiredStyle: "<span class='ux-required-field' data-qtip='Required'></span>",
      fieldDefaults: {
        msgTarget: "side",
        readOnly: false,
        allowBlank: true,
        labelAlign: "right"
      },
      tbar: null
      
    });
    return this.callParent(arguments);
  }
});
