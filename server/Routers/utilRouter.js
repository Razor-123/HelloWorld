const express = require('express');
const utilRouter = express.Router();
const {login,logout,protectRoute} = require('../controller/authContoller');
const {getAlllectures,getLecture} = require('../controller/lectureController')

utilRouter.route('/login')
    .post(login)

utilRouter.route('/logout')
    .get(logout)


utilRouter.use(protectRoute);

utilRouter.route('/lectures')
    .get(getAlllectures)

utilRouter.route('/lecture/:id')
    .get(getLecture)

// adminRouter.route('/escalateComplaint/:id')
//     .patch(escalateComplaint)

module.exports = utilRouter;