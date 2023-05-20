declare module akjs {
  interface Application {
    controller: { [key: string]: any }
    sevice: { [key: string]: any }
    model: { [key: string]: any }
  }
}