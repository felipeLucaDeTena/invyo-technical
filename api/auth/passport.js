/* eslint-disable consistent-return */
/* eslint-disable new-cap */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const user = { email: 'test@invyo.io', password: 'test123@' };

passport.use(
    'login',
    new LocalStrategy(
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
    new JwtStrategy(
        {
            secretOrKey: 'secretkey',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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
