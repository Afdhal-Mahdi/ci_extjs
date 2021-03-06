Ext.define('EJS.Application', {
				name: 'EJS',

				extend: 'Ext.app.Application',

				requires: [
					'Ext.state.CookieProvider',
					'Ext.ModelManager',
					'Ext.tip.ToolTip',
					'EJS.view.Navigation',
					'Ext.ux.ProgressBarPager',
					'Ext.form.FieldContainer',
					'Ext.toolbar.Paging',
					'Ext.grid.plugin.RowEditing',
					'Ext.ux.grid.FiltersFeature',
					'Ext.data.proxy.Rest'
					/* 'Ext.ux.DataTip',
					'Ext.util.*',
					'Ext.form.*',
					'Ext.window.*' */
				],

				views: [
					/* TODO : Tambahkan hasil generator view dibawah ini... */
					'EJS.view.contoh.menu','EJS.view.master.pengarang'],

				controllers: [
					/* TODO : Tambahkan hasil generator controller di baris dibawah... */
					'Main','pengarang'
				],

				stores: [
					/* TODO: add stores here */
				]
			});