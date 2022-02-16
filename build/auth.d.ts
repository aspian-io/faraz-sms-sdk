export interface IFarazUser {
    id: number;
    username: string;
    name: string;
    email: string;
    document_block: string;
    send_block: string;
    mobile: string;
    tellephone: string;
    national_id: string;
    certificate_id: string;
    address: string;
    postal_code: string;
    company: string;
    expire: string;
    status: string;
}
export interface IFarazAuthData {
    user: IFarazUser;
}
export interface IFarazAuthResult {
    status: string;
    code: number;
    message: string;
    data: IFarazAuthData;
}
/**
 *
 * Get authorized user
 *
 * @returns {Promise<IFarazAuthResult>} - A Promise of type IFarazAuthResult
 * @link Also checkout http://docs.ippanel.com/#section/Authentication
 */
export declare function farazAuth(): Promise<IFarazAuthResult>;
