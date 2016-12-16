/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.deuda.Deuda', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'deudaId', type: 'int' },
        { name: 'estructuraTarifariaId', type: 'int' },
        { name: 'tipoTarifa', type: 'string' },
        { name: 'precio', type: 'decimal' },
        { name: 'mes', type: 'string' },
        { name: 'deparatamentoId', type: 'int' },
        { name: 'pagoId', type: 'int' },
        { name: 'estado', type: 'string' },

        { name: 'departamento' }
    ],
    belongsTo: {
        model: 'sacec.model.departamento.Departamento',
        foreignKey: 'departamentoId',
        name: 'departamento'
    },
});