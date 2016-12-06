Ext.define('sacec.model.menu.Tree', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'text' },
		{ name: 'iconCls' },
		{ name: 'leaf', type: 'boolean' },
		{ name: 'children' },
	]
	
});