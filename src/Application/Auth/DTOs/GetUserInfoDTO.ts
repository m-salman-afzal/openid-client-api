export interface IGetUserInfoDTO {
    accessToken: string;
}

interface GetUserInfoDTO extends IGetUserInfoDTO {}

class GetUserInfoDTO implements GetUserInfoDTO {
     private constructor(body: IGetUserInfoDTO) {
        this.accessToken = body.accessToken;
    }

    static create(body: IGetUserInfoDTO): GetUserInfoDTO {
        return new GetUserInfoDTO(body);
    }
}

export default GetUserInfoDTO;
