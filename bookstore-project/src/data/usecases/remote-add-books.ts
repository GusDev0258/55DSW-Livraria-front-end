import { AddBook } from "@/domain/usecases/add-book";
import { HttpClient, HttpStatusCode } from "../protocols/http";

export class RemoteAddBook implements AddBook {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddBook.Model>
  ) {}

  async add(params: AddBook.Params): Promise<AddBook.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        return null;
    }
  }
}
  export namespace RemoteAddBook {
    export type Model = AddBook.Model;
  }