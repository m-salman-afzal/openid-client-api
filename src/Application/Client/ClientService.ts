import {injectable} from "tsyringe";
import {Issuer} from "openid-client";

import Constants from "../Utils/Constants";
import Config from "../../Infrastructure/Config";
import logger from "../../Infrastructure/Logger/logger";
import HttpResponse from "../Utils/HttpResponse";
import HttpStatusCode from "../Utils/HttpStatusCode";

@injectable()
class ClientService {
    async auth() {
        try {
            const a = 1;
        } catch (e) {
            logger.error(e.message);
        }
    }
}

export default ClientService;
