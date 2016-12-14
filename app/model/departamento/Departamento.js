/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.departamento.Departamento', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'departamentoId', type: 'int' },
        { name: 'nombre', type: 'string' },
        { name: 'modeloDepartamentoId', type: 'int' },
        { name: 'propietarioId', type: 'int' },
        { name: 'cantidadHabitantes', type: 'int' },

        { name: 'modeloDepartamento' },
        { name: 'propietario' }
    ],

    belongsTo: {
        model: 'sacec.model.modeloDepartamento.ModeloDepartamento',
        foreignKey: 'modeloDepartamentoId',
        name: 'modeloDepartamento'
    },

    belongsTo: {
        model: 'sacec.model.propietario.Propietario',
        foreignKey: 'propietarioId',
        name: 'propietario'
    },
});