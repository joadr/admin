Template.adminEntitiesIndex.helpers({

	settings: function () {
		var controller = Iron.controller();
		var defaultFields = controller.data().entity.options.defaultIndexTableFields;
		var fields = _.union(defaultFields, [{
				key: '_id',
				label: 'Actions',
				fn: function (value) {
					var edit = '<a class="btn btn-default btn-xs" href="' + Router.routes['adminEntitiesUpdate'].path({_id:value, entity: controller.data().entity.name}) + '">Edit</a>';
					var del = '<a class="btn btn-default btn-xs" href="' + Router.routes['adminEntitiesDelete'].path({_id:value, entity: controller.data().entity.name}) + '">Delete</a>';
					var sum = '<div class="btn-group">' + edit + del + '</div>';
				    return new Spacebars.SafeString(sum);
				}
			}]);

		return {
			rowsPerPage: 10,
			showFilter: true,
			showNavigation: 'auto',
			fields: fields
		};
	}
});