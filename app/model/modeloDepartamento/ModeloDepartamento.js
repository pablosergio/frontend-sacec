/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.modeloDepartamento.ModeloDepartamento', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
    	{ name: 'modeloDepartamentoId', type: 'int' },
    	{ name: 'tipo', type: 'string' },
        { name: 'superficie', type: 'decimal' },
        { name: 'dormitorios', type: 'int' },
    ]
});