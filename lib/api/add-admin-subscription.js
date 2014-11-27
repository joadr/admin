orion.admin.adminSubscriptions = [orion.subs.subscribe('dictionary')];

orion.admin.addAdminSubscription = function(func) {
	orion.admin.adminSubscriptions.push(func);
}