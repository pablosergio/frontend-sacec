/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.egreso.Egreso', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'egresoId', type: 'int' },
        { name: 'fechaEgreso', type: 'date' },
        { name: 'tipoEgreso', type: 'string' },
        { name: 'descripcion', type: 'string' },
        { name: 'totalEgreso', type: 'decimal' },
        { name: 'numeroComprobante', type: 'string' },
        { name: 'observacion', type: 'string' }
           
    ]
});