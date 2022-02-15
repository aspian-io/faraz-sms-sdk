export interface IFarazCreatePatternResult {
    status: string;
    code: number;
    message: string;
    data: IFarazCreatePatternData;
}
export interface IFarazCreatePatternData {
    pattern: IFarazCreatePatternMsgPattern;
}
export interface IFarazCreatePatternMsgPattern {
    code: string;
    status: string;
    message: string;
    is_shared: boolean;
}
/**
 *
 * Create message pattern
 *
 * @param {string} pattern - Pattern template
 * @param {string} description - Pattern description
 * @param {boolean} is_shared - Determine that pattern shared or not
 * @returns {Promise<IFarazCreatePatternResult>} - A Promise of type IFarazCreatePatternResult
 * @link Also checkout http://docs.ippanel.com/#operation/CreatePattern
 */
export declare function farazCreatePattern(pattern: string, description: string, is_shared: boolean): Promise<IFarazCreatePatternResult>;
