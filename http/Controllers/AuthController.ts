import e from "express";
import {container} from "tsyringe";

import AuthService from "../../src/Application/Auth/AuthService";
import GetUserInfoDTO, { IGetUserInfoDTO } from "../../src/Application/Auth/DTOs/GetUserInfoDTO";

import HttpResponse from "../../src/Application/Utils/HttpResponse";
import logger from "../../src/Infrastructure/Logger/logger";

const authService = container.resolve(AuthService);

class AuthController {
    static async getAuthURL(request: e.Request, response: e.Response) {
        try {
            const httpResponse = await authService.getAuthURL();
            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }

    static async getAccessToken(request: e.Request, response: e.Response) {
        try {
            const httpResponse = await authService.getAccessToken(request);
            HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }

    static async getUserInfo(request: e.Request, response: e.Response) {
        try {
            const {params} = request;
            const getUserInfoDTO = GetUserInfoDTO.create(params as unknown as IGetUserInfoDTO);
            const httpResponse = await authService.getUserInfo(getUserInfoDTO);
            return HttpResponse.convertToExpress(response, httpResponse);
        } catch (e) {
            logger.error(e.message);
        }
    }
}

export default AuthController;
