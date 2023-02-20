const express = require('express');

const ctrl = require('../../controller/auth');

const {schemas} = require("../../models/user")

const { validateBody, authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

router.get("/verify/:verificationCode", ctrl.verify)

router.post("/verify", validateBody(schemas.verifyEmailSchema), ctrl.resendVerifyEmail)

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.get('/logout', authenticate, ctrl.logout);

router.patch('/users', authenticate, validateBody(schemas.updateSubscriptionSchema), ctrl.updateSubscription);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);


module.exports = router;