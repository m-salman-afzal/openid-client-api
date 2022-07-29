import e from "express";

import HttpResponse from "../../src/Application/Utils/HttpResponse";
import HttpStatusCode from "../../src/Application/Utils/HttpStatusCode";
import logger from "../../src/Infrastructure/Logger/logger";

class ClientController {
    static async registerClient(request: e.Request, response: e.Response) {
        try {
            const responseBody = {
                requestBody: request.body,
                requestQuery: request.query,
                requestParams: request.params
            };
            const httpResponse = HttpResponse.create(HttpStatusCode.OK, responseBody);
            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error("Error: ", e.message);
        }
    }
}

export default ClientController;
