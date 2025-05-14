// passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../src/models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    if (!profile.emails || profile.emails.length === 0) {
      return done(new Error('No email found in Google profile'));
    }
    // console.log("accesstoken:",accessToken)
    const email = profile.emails[0].value;
    const name = profile.displayName;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        password: '', // Google login doesn't need a password
        // role: ['user'],
        isActivated: true,
      });
      await user.save();
    }

    // ✅ Return both profile and DB user
    return done(null, { profile, user });

  } catch (err) {
    return done(err, null);
  }
}));