export interface IFarazSendPatternResult {
    status: string;
    code: number;
    message: string;
    data: IFarazSendPatternData;
}
export interface IFarazSendPatternData {
    bulk_id: number;
}
/**
 *
 * Create message pattern
 *
 * @param {string} pattern_code - Pattern code
 * @param {string} originator - Your line number to send message from that
 * @param {string} recipient - Recipient number
 * @param {T} values - Pattern values is and object of generic type T
 * @returns {Promise<IFarazSendPatternResult>} - A Promise of type IFarazSendPatternResult
 * @link Also checkout http://docs.ippanel.com/#operation/SendPattern
 */
export declare function farazSendPattern<T>(pattern_code: string, originator: string, recipient: string, values: T): Promise<IFarazSendPatternResult>;
