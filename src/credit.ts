import axios from "axios";
import { farazSMS } from "./faraz-sms";

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
export async function farazCredit (): Promise<IFarazCreditResult> {
  try {
    const { data } = await axios.get<IFarazCreditResult>( "http://rest.ippanel.com/v1/credit", {
      headers: {
        Authorization: farazSMS.accessKey
      }
    } );
    return data;
  } catch ( error: any ) {
    throw new Error( error.response.data );
  }
}