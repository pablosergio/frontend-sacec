Ext.define('sacec.model.menu.Item', {
	extend: 'Ext.data.Model',
	uses: [
		'sacec.model.menu.Root'
	],
	idProperty: 'id',
	fields: [
		{ name: 'text' },
		{ name: 'iconCls' },
		{ name: 'className' },
		{ name: 'id' },
		{ name: 'parent_id' },
		{ name: 'menu'},
		{ name: 'alias'}
	],
	belongsTo: {
		model: 'sacec.model.menu.Root',
		foreignKey: 'parent_id',
	}
});