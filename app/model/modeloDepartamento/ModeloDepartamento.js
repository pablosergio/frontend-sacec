/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sglm.model.propietario.Propietario', {
    extend: 'sglm.model.abstract.Abstract',
    fields: [
        { name: 'nombre', type: 'string' },
        { name: 'apellido', type: 'string' },
        { name: 'celular', type: 'string' },
        { name: 'telefono', type: 'string' },
        { name: 'email', type: 'string' }
    ]
});