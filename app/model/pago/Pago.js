/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.pago.Pago', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'pagoId', type: 'int' },
        { name: 'deudaId', type: 'int' },
        { name: 'tipoTarifa', type: 'string' },
        { name: 'precio', type: 'decimal' },
        { name: 'fechaRegistro', type: 'date' },
        { name: 'pagadoPor', type: 'string' },
        { name: 'observacion', type: 'string' },
    
        { name: 'deuda' }
    ],
    belongsTo: {
        model: 'sacec.model.deuda.Deuda',
        foreignKey: 'deudaId',
        name: 'deuda'
    },
});
