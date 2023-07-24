import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import UserModel from "../UserModel";
const secretKey = process.env.secret_key as string;
// console.log({ secretKey });

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secretKey,
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  console.log({ payload, done });
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other otherwise, call done without a user object
  UserModel.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});
