import { HttpResponse } from './'
export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (paramns: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
