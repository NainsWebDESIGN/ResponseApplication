/** Ajax取得的資料處理成這個狀態 */
export interface ResponseData {
    status: boolean,
    err: string,
    ret: any
}
/** PHP的格式 */
export interface PHP_Content {
    getWay: string | number,
    body: string
}