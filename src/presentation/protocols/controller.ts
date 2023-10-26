
export interface Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse>
}

type HttpResponse = {
    statusCode: number
    body: any
}

type HttpRequest = {
    body?: any
}