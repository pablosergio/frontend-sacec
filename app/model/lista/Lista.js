/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.lista.Lista', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'listaId', type: 'int' },
        { name: 'tipo', type: 'string' },
        { name: 'descripcion', type: 'string' },
    ]
});