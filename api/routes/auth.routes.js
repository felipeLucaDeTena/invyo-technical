/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const router = express.Router();

router.route('/login').post(async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                console.error(err, user);
                const error = new Error('An error occurred.');
                return next(error);
            }
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);
                const body = { id: user.id, email: user.email };
                const token = jwt.sign({ user: body }, 'secretkey');
                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

export default router;
