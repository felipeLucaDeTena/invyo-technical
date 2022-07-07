/* eslint-disable consistent-return */
/* eslint-disable new-cap */
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const user = { email: 'test@invyo.io', password: 'test123@' };

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (userName, password, done) => {
            try {
                if (
                    userName.toLocaleLowerCase() ===
                        user.email.toLocaleLowerCase() &&
                    password === user.password
                ) {
                    return done(null, user, {
                        message: 'Logged in Successfully',
                    });
                }
                return done(null, false, {
                    message: 'User not found or Wrong Password',
                });
            } catch (error) {
                console.error(error);
                return done(error);
            }
        }
    )
);

passport.use(
    new JWTstrategy(
        {
            secretOrKey: 'secretkey',
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);
