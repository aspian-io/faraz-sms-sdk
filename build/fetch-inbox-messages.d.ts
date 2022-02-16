export interface IFarazFetchInboxMessagesResult {
    status: string;
    code: number;
    message: string;
    data: IFarazFetchInboxMessagesData;
    meta: IFarazFetchInboxMessagesMeta;
}
export interface IFarazFetchInboxMessagesData {
    messages: IFarazFetchInboxMessagesMsg[];
}
export interface IFarazFetchInboxMessagesMsg {
    number: string;
    message: string;
    sender: string;
    time: string;
    type: string;
}
export interface IFarazFetchInboxMessagesMeta {
    total: number;
    pages: number;
    limit: number;
    page: number;
    prev?: string;
    next?: string;
}
/**
 *
 * Fetch inbox messages
 *
 * @returns {Promise<IFarazFetchInboxMessagesResult>} - A Promise of type IFarazFetchInboxMessagesResult
 * @link Also checkout http://docs.ippanel.com/#operation/FetchInboxMessages
 */
export declare function farazFetchInboxMessages(): Promise<IFarazFetchInboxMessagesResult>;
