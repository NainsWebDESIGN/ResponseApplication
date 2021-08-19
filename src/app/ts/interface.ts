export interface ResponseError {
    error: string,
    msg: string
}
export interface ResponeData {
    err: ResponseError,
    url: string,
    ret: any
}