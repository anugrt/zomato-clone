import Jwtpassport from "passport-jwt";
import dotenv from "dotenv";

dotenv.config({ path: require("path").resolve(__dirname, "../.env") });

// Database

import { UserModel } from "../database/allModel";
import passport from "passport";

const JwtStrategy = Jwtpassport.Strategy;
const ExtractJwt = Jwtpassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoAPP",
};

export default (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt__payload, done) => {
      try {
          const doesUserExist = await UserModel.findById(jwt__payload.user);

          if(!doesUserExist) return done(null, false);

          return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
