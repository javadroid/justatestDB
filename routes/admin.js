const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin.controllers.js');
const userMiddleware = require('../middleware/users.js');
// fetch all users
router.get('/all_users', userMiddleware.isLoggedIn, adminControllers.getAllUsers);

router.get('/users_num', userMiddleware.isLoggedIn, adminControllers.getTotalNumRegUsers);

// fetch user by id
router.get('/user', userMiddleware.isLoggedIn, adminControllers.getUserById);
//delete user by id
router.delete('/user', userMiddleware.isLoggedIn, adminControllers.deleteUserById);
// freez user from logging in
router.put('/freez/user/', userMiddleware.isLoggedIn, adminControllers.freezeUser);

// disable user user from logging in
router.put('/disable/user', userMiddleware.isLoggedIn, adminControllers.disableUser);
// enable user access to his/her accoutn
router.put('/enable/user', userMiddleware.isLoggedIn, adminControllers.enableUser);
// delete user from the system
router.delete('/delete/user', userMiddleware.isLoggedIn, adminControllers.deleteUser);
// change user api key
router.put('/enable/apikey', userMiddleware.isLoggedIn, adminControllers.enableUserAPIKEY);
router.put('/disable/apikey', userMiddleware.isLoggedIn, adminControllers.disableUserAPIKEY);
// User permission module ends here

// fetch user transaction history
router.get('/user/transactions', userMiddleware.isLoggedIn, adminControllers.getTrnxByUserId);

// fetch all users transaction history
router.get('/users/trxhistory', userMiddleware.isLoggedIn, adminControllers.fetchAllUsersTrnxHistory);
//Login user
router.post('/login', adminControllers.login);
// change password
router.put('/user/change_password', userMiddleware.isLoggedIn, adminControllers.changePassword);
// Admin user login ends here
//Log out user
router.delete('/logout', adminControllers.userLogout);


// Number renting module start here
// Setting up number renting module
// Admin can set the renting fee base on coutry and duration
router.post('/setrentfee', userMiddleware.isLoggedIn, adminControllers.setRentFee);
router.get('/rentednumbers', userMiddleware.isLoggedIn, adminControllers.getRentedNumbers);
// Number renting fee module ends here

// Payment method module starts here
// Set up payment method
router.post('/paymentmethod', userMiddleware.isLoggedIn, adminControllers.createPaymentMethod);
// fetching available payment methods
router.get('/paymethods', userMiddleware.isLoggedIn, adminControllers.getPaymentMethods);

// delete payment method
router.delete('/paymentmethod', userMiddleware.isLoggedIn, adminControllers.deletePaymentMethod);
// diasable payment method
router.put('/disablemethod', userMiddleware.isLoggedIn, adminControllers.disablePaymentMethod);

// enable payment method
router.put('/enablemethod', userMiddleware.isLoggedIn, adminControllers.enablePaymentMethod);
// Payment methods module ends here

//Laguage module starts here
//setting up language
router.post('/createlang', userMiddleware.isLoggedIn, adminControllers.createLanguage);
// fetching available languages
router.get('/languages', userMiddleware.isLoggedIn, adminControllers.getLanguages);


// deleting a language from the system
router.delete('/deletelang', userMiddleware.isLoggedIn, adminControllers.deleteLanguage);
// Disabling a language from the system
router.put('/disablelang', userMiddleware.isLoggedIn, adminControllers.disableLanguage);
// Enabling a language in the system
router.put('/enablelang', userMiddleware.isLoggedIn, adminControllers.enableLanguage);
//language module ends here

// Feedback module starts here
// fetching feedbacks from the users
router.get('/feedbacks', userMiddleware.isLoggedIn, adminControllers.getFeedbacks);
// To mark the feedback satus as seen
router.put('/feedback', userMiddleware.isLoggedIn, adminControllers.markFeedbackAsSeen);
// feedback module ends here

// Blog posts module starts here
router.post('/create/post', userMiddleware.isLoggedIn, adminControllers.createPost);
// Deleting blog post
router.delete('/delete/post', userMiddleware.isLoggedIn, adminControllers.deletePostById);
// Editing blog post
router.put('/edit/post', userMiddleware.isLoggedIn, adminControllers.updatePost);
// Enable blog post
router.put('/enable/post', userMiddleware.isLoggedIn, adminControllers.enablePost);
// Disable blog post
router.put('/disable/post', userMiddleware.isLoggedIn, adminControllers.disablePost);

//country module starts here
//Add up country
router.post('/create/country', userMiddleware.isLoggedIn, adminControllers.createCountry);
// Wallet module
// Fetch users available wallet balance
router.get('/users/balance', userMiddleware.isLoggedIn, adminControllers.fetchusersWallets);
// Reset user topup balance
router.put('/set/balance', userMiddleware.isLoggedIn, adminControllers.setUserBalance);
// Referrals programme
router.get('/users/referrals', userMiddleware.isLoggedIn, adminControllers.referrals);
// fetch system notification email
router.get('/system/email', userMiddleware.isLoggedIn, adminControllers.systemNotificationEmail);
// update system notification email
router.put('/system/email', userMiddleware.isLoggedIn, adminControllers.systemNotificationEmail);
router.get('/login/logging', userMiddleware.isLoggedIn, adminControllers.loginLogs);
router.get('/logout/logging', userMiddleware.isLoggedIn, adminControllers.logoutLogs);
router.get('/passwords/logging', userMiddleware.isLoggedIn, adminControllers.changePasswordLogs);
router.get('/balance/logging', userMiddleware.isLoggedIn, adminControllers.balanceLogs);
router.post('/application', userMiddleware.isLoggedIn, adminControllers.createApplication);
router.get('/applications', userMiddleware.isLoggedIn, adminControllers.getApplication);
router.delete('/application', userMiddleware.isLoggedIn, adminControllers.deleteApplication);
router.put('/application', userMiddleware.isLoggedIn, adminControllers.updateApplication);
router.put('/application/enable', userMiddleware.isLoggedIn, adminControllers.enableApp);
router.put('/application/disable', userMiddleware.isLoggedIn, adminControllers.disableApp);
// Export router
module.exports = router;