export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post: (paramns: HttpPostParams) => Promise<void>
}
