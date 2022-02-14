export interface IFarazSendPatternResult {
    value: IFarazSendPatternValue;
}
export interface IFarazSendPatternValue {
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
 * @param {Object} values - Pattern values
 * @returns {Promise<IFarazSendPatternResult>} - A Promise of type IFarazSendPatternResult
 * @link Also checkout http://docs.ippanel.com/#operation/SendPattern
 */
export declare function farazSendPattern(pattern_code: string, originator: string, recipient: string, values: {
    name: string;
}): Promise<IFarazSendPatternResult>;
