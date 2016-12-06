Ext.apply(Ext.form.VTypes, {
    enteroDecimales: function (val, field) {
        // console.dir(field.up('form'));
        if (field.validTypes) {
            var enteros = field.up('form').down('#' + field.validTypes[0]);
            var decimales = field.up('form').down('#' + field.validTypes[1]);

            entero = enteros.getValue();
            decimal = decimales.getValue();
            maxvalue = Math.pow(10, entero) - 1;
            field.allowDecimals = (decimal === 0) ? false : true;
            field.decimalPrecision = decimal;
            field.setMaxValue(maxvalue);
            field.setMinValue(-maxvalue);
            // console.log(enteros.getValue());
        }
        return true;
    },
    enteroDecimalesText: 'No existe enteros ni decimales asignados'
});



Ext.override(Ext.data.Store, {

    //verifica si existe algun record dentro del store con ese valor y nombre solo busca uno
    existeRecord: function (name, value) {
        var data = this.data.items,
            dLen = data.length,
            record, d;

        for (d = 0; d < dLen; d++) {
            if (data[d].get(name) == value) {
                return true;
            }

        }
        return false;
    }
});

Ext.override(Ext.form.NumberField, {
    decimalSeparator: '.'
});
Ext.override(Ext.data.proxy.Ajax, { timeout: 120000 });