export interface HelloWorldDataSource {
  getHelloWorld(): Promise<string>;
}
