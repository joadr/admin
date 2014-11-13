AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: true,
    overrideLoginErrors: true,
    sendVerificationEmail: false
});

AccountsTemplates.configureRoute('changePwd', {
	template: 'accountsFormTemplate',
	path: '/admin/change-password',
	layoutTemplate: 'adminLayout',
});