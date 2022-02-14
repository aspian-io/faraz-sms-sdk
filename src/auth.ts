import axios from "axios";
import { farazSMS } from "./faraz-sms";

export interface IFarazUser {
  id: string;
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
export async function farazAuth (): Promise<IFarazAuthResult> {
  try {
    const { data } = await axios.get<IFarazAuthResult>( "http://rest.ippanel.com/v1/user", {
      headers: {
        Authorization: farazSMS.accessKey
      }
    } );
    return data;
  } catch ( error: any ) {
    throw new Error( error.response.data );
  }
}