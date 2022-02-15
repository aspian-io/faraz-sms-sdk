export interface IFarazCreditResult {
    status: string;
    code: number;
    message: string;
    data: IFarazCreditData;
}
export interface IFarazCreditData {
    credit: number;
}
/**
 *
 * Get user credit
 *
 * @returns {Promise<IFarazCreditResult>} - A Promise of type IFarazCreditResult
 * @link Also checkout http://docs.ippanel.com/#operation/GetCredit
 */
export declare function farazCredit(): Promise<IFarazCreditResult>;
