Ext.define('sacec.model.menu.Root', {
	extend: 'Ext.data.Model',
	uses: [
		'sacec.model.menu.Item'
	],
	idProperty: 'id',
	fields: [
		{ name: 'text' },
		{ name: 'iconCls' },
		{ name: 'id' }
	],
	hasMany: {
		model: 'sacec.model.menu.Item',
		foreignKey: 'parent_id',
		name: 'items'
	}
});