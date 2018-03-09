const passport = require("passport"); // import passport packages
const GoogleStrategy = require("passport-google-oauth20").Strategy; //uses to authenticate users with google Strategy
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users'); // from the user.js users function

passport.serializeUser((user, done) => {
		done(null, user.id);
});

passport.deserializeUser((id, done) => {
		User.findById(id).then(user => {
				done(null, user);
		});
});

//console.developers.google.com
passport.use(
	// passport.use to where the authenticate should happen
	new GoogleStrategy(
		{
			// new GoogleStrategy creates new instances
			clientID: keys.googleClientID, // from keys.js file which we imported above
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		async (accessToken, refreshToken, profile, done) => {
				const exsitingUser = await User.findOne({ googleId : profile.id })

				if(exsitingUser){
						//user already found
						return done(null, exsitingUser); // say passport to everything is okay and authentication is done
				}
				// new user
				const user = await new User({ googleId : profile.id }).save()
				done(null, user);
		}
	)
);
