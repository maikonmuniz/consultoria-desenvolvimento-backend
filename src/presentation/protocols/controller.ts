
export interface Controller {
    handle(httpRequest: HttpRequest): HttpResponse
}

type HttpResponse = {
    statusCode: number
    body: any
}

type HttpRequest = {
    body?: any
}