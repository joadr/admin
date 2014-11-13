Template.adminDictionaryUpdate.helpers({
	getDoc: function() {
		return cms.dictionary.collection.findOne();
	},
	allCategories: function() {
		return _.keys(cms.dictionary.categories);
	},
	isActiveCategory: function() {
		return this == Router.current().data().category ? 'label-primary' : 'label-default';
	}
});