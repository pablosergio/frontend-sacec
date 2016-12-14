/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.estructuraTarifaria.EstructuraTarifaria', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'estructuraTarifariaId', type: 'int' },
        { name: 'tipoTarifa', type: 'string' },
        { name: 'gestion', type: 'string' },
        { name: 'modeloDepartamentoId', type: 'int' },
        { name: 'precio', type: 'decimal' },
        { name: 'descripcion', type: 'string' },
       
        { name: 'modeloDepartamento' },
    ],

    belongsTo: {
        model: 'sacec.model.modeloDepartamento.ModeloDepartamento',
        foreignKey: 'modeloDepartamentoId',
        name: 'modeloDepartamento'
    }
    
});