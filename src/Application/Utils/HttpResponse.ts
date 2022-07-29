class HttpResponse {
    private statusCode: number;
    private body: any;

    private constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }

    static create(responseCode, body): HttpResponse {
        return new HttpResponse(responseCode, body);
    }

    static convertToExpress(response, httpResponse): object {
        return response.status(httpResponse.statusCode).json(httpResponse.body);
    }

    static download(response, filePath): unknown {
        return response.download(filePath);
    }
}

export default HttpResponse;
