Template.adminSidebar.events({
    'click #logout-btn': function(event){
        Meteor.logout();
        Router.go('/');
    },
});

Template.adminSidebar.helpers({
	getPath: function (options) {
		return Router.path('adminEntitiesIndex', {entity:this.name});;
	},
	getEntities: function() {
		result = [];
		_.each(cms.entities, function(value, key) {
			result.push(value);
		});
		return result;
	}
});