const express = require('express');
const router = express.Router();
const userMiddleware = require('../middleware/users.js');
const userControllers = require('../controllers/user.controllers.js');
// User registration
router.post('/signup', userMiddleware.validateRegister, userControllers.registerUser);
router.post('/social_media_sign', userControllers.socialLogin);
router.get('/log', (req, res, next) => {
    res.send({ 'Message': 'Welcome' })
});

// To verify user email
router.put('/verify/email', userControllers.verifyEmail);
// changing user password
router.post('/user/changepassword', userMiddleware.isLoggedIn, userControllers.changePassword);
//Login user
router.post('/login', userControllers.userLogin);

//Log out user
router.post('/logout/', userControllers.userLogout);
// proper logging out user
// router.put("/logout", authToken, function(req, res) {
//     const authHeader = req.headers["authorization"];
//     jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
//         if (logout) {
//             res.send({ msg: 'You have been Logged Out' });
//         } else {
//             res.send({ msg: 'Error' });
//         }
//     });
// });
//Fetching referral hostory
router.get('/referral/history', userMiddleware.isLoggedIn, userControllers.userRefHistory);
// fetch user topup history
router.get('/user/payment', userMiddleware.isLoggedIn, userControllers.userPayment);
// Renting calculator module starts here
//Getting rent fee by country
router.get('/rentfees/country', userControllers.rentFeeWithCountry);
// Get rent fee by country and duration
router.get('/rentfees/country/duration', userControllers.rentFeeWithDurationAndCountry);

// payment method starts here
// Fetching all the available payment methods
router.get('/paymentmethods', userMiddleware.isLoggedIn, userControllers.paymentMethods);
// payment method ends here

// Fetch available languages
router.get("/languages", userControllers.getLanguages);
// Fetching laguages ends here

// Fetch available countries
router.get("/countries", userMiddleware.isLoggedIn, userControllers.getCountries);


// Change user api key starts here
router.put("/user/changeapikey", userMiddleware.isLoggedIn, userControllers.userAPIKey);
// Change API key ends here

// Change user password starts here
router.put("/change/password", userMiddleware.isLoggedIn, userControllers.userPassword);
// change user password module ends here

// Feedback module start here
//sending feedback to the admin
router.post('/feedback', userControllers.sendFeedback);


// Blog modules
// fetching all blog posts
router.get("/blog/posts", userControllers.getAllBlogPosts);
// fetching single blog post
router.get("/blog/post", userControllers.getSingleBlogPost);

// Comment on a post
router.post('/comment', userMiddleware.isLoggedIn, userControllers.sendComment);
//  blog posts module ends here

// fetching user avialable balance
router.get('/balance', userMiddleware.isLoggedIn, userControllers.getUserBalance);

// fetching user details by id
router.get('/user', userMiddleware.isLoggedIn, userControllers.getUserDetails);
// Number renting module starts here
router.get('/rent/numbers', userMiddleware.isLoggedIn, userControllers.getRentNumber);
router.post('/rent/number', userMiddleware.isLoggedIn, userControllers.rentNumber);
router.get('/applications', userMiddleware.isLoggedIn, userControllers.getApplications);
router.put('/number/cancel', userMiddleware.isLoggedIn, userControllers.cancelNumber);
//To protect a route now, simply include this middleware when calling the route as follows:
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
module.exports = router;