import {injectable} from "tsyringe";
import {Issuer} from "openid-client";

import GetUserInfoDTO from "./DTOs/GetUserInfoDTO";

import Constants from "../Utils/Constants";
import Config from "../../Infrastructure/Config";
import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";


const {CODE_CHALLENGE: code_challenge, CODE_VERIFIER: code_verifier} = Constants;
const {oauth} = Config;

@injectable()
class AuthService {
    async authProvider() {
        try {
            const oidc = await Issuer.discover("http://localhost:3000/.well-known/openid-configuration");
            return new oidc.Client({
                client_id: oauth.CLIENT_ID,
                client_secret: oauth.CLIENT_SECRET,
                redirect_uris: oauth.REDIRECT_URI.split(" "),
                response_types: ["code"],
                grant_types: ["authorization_code"],
                token_endpoint_auth_method: "client_secret_basic"
            });
        } catch (e) {
            logger.error(e.message);
        }
    }

    async getAuthURL() {
        try {
            const client = await this.authProvider();
            const authURL = {
                authURL: client.authorizationUrl({
                    scope: "openid",
                    redirect_uri: "http://localhost:8080/auth/accessToken",
                    code_challenge: code_challenge,
                    code_challenge_method: "S256"
                })
            };

            return HttpResponse.create(HttpStatusCode.OK, authURL);
        } catch (e) {
            logger.error(e.message);
            return HttpResponse.create(HttpStatusCode.ERROR, {message: e.message});
        }
    }

    async getAccessToken(request) {
        try {
            const client = await this.authProvider();
            const params = client.callbackParams(request);
            const tokenSet = await client.callback("http://localhost:8080/auth/accessToken", params, {code_verifier});
            console.log("received and validated tokens %j", tokenSet);
            console.log("validated ID Token claims %j", tokenSet.claims());

            return HttpResponse.create(HttpStatusCode.OK, tokenSet);
        } catch (e) {
            logger.error(e.message);
            return HttpResponse.create(HttpStatusCode.ERROR, {message: e.message});
        }
    }

    async getUserInfo(getUserInfoDTO: GetUserInfoDTO): Promise<HttpResponse> {
        try {
            const client = await this.authProvider();
            const userinfo = await client.userinfo(getUserInfoDTO.accessToken);
            console.log("userinfo %j", userinfo);
            return HttpResponse.create(HttpStatusCode.OK, userinfo);
        } catch (e) {
            logger.error(e.message);
            return HttpResponse.create(HttpStatusCode.ERROR, {message: e.message});
        }
    }
}

export default AuthService;
