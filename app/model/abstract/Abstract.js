/* Desarrollado por Pablo Sergio Alvarado G. */

Ext.define('sacec.model.abstract.Abstract', {
    extend: 'Ext.data.Model',
    fields: [
    	{ name: 'login_usr', type: 'string' },
        { name: 'fecha_reg', type: 'date' },
        { name: 'estado', type: 'string' }
    ]
});