import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import {Issuer, Strategy} from "openid-client";

import Config from "../../src/Infrastructure/Config";

const {oauth} = Config;

const bootstrap = express();

const limit = {
    limit: "50mb",
    extended: true
};

bootstrap.use(express.json(limit));
bootstrap.use(express.urlencoded(limit));
bootstrap.use(cors());
bootstrap.use(morgan("dev"));
// bootstrap.use(session({secret: "secret", resave: false, saveUninitialized: true}));

// bootstrap.use(passport.initialize());
// bootstrap.use(passport.session());

// passport.serializeUser((user, done) => {
//     console.log("-----------------------------");
//     console.log("serialize user");
//     console.log(user);
//     console.log("-----------------------------");
//     done(null, user);
// });

// passport.deserializeUser((user, done) => {
//     console.log("-----------------------------");
//     console.log("deserialize user");
//     console.log(user);
//     console.log("-----------------------------");
//     done(null, user);
// });

// Issuer.discover("http://localhost:3000/").then(oidc => {
//     const client = new oidc.Client({
//         client_id: oauth.CLIENT_ID,
//         client_secret: oauth.CLIENT_SECRET,
//         redirect_uris: ["http://localhost:8080/user"],
//         response_types: ["code"],
//         grant_types: ["authorization_code"],
//         token_endpoint_auth_method: "client_secret_basic"
//     });

//     passport.use(
//         "oidc",
//         new Strategy({client, passReqToCallback: true}, (request, tokenSet, userinfo, done) => {
//             console.log("tokenSet", tokenSet);
//             console.log("userinfo", userinfo);
//             // request.session.tokenSet = tokenSet;
//             // request.session.userinfo = userinfo;
//             return done(null, tokenSet);
//         })
//     );
// });

export default bootstrap;
