import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'
import { HttpPostParams, HttpPostClient } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
    url?: string;
    body?: object
    response: HttpResponse = {
      statusCode: HttpStatusCode.ok
    }

    async post (params: HttpPostParams): Promise<HttpResponse> {
      this.url = params.url
      this.body = params.body

      return await Promise.resolve(this.response)
    }
}
