import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/User.js";

passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const user = User.findOne({ email: email });
      if (!user) {
        return done(null, false, {
          message: "not found user...",
        });
      } else {
        const match = await User.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: "incorrect password...",
          });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

