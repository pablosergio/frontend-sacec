/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.propietario.Propietario', {
    extend: 'sacec.model.abstract.Abstract',
    fields: [
        { name: 'nombre', type: 'string' },
        { name: 'apellido', type: 'string' },
        { name: 'celular', type: 'string' },
        { name: 'telefono', type: 'string' },
        { name: 'email', type: 'string' }
    ]
});