export interface IPagedResult<T> {
    HasMorePages: boolean;
    PageData: T[];
}
