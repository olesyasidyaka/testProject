const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accsessToken, refreshToken, profile, done) => {
        console.log('accsessToken', accsessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile ', profile);
    })
);
