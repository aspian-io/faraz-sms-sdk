import axios from "axios";
import { farazSMS } from "./faraz-sms";

export interface IFarazGetSMSResult {
  status: string;
  code: number;
  message: string;
  data: IFarazGetSMSData;
}

export interface IFarazGetSMSData {
  message: IFarazGetSMSMessage;
}

export interface IFarazGetSMSMessage {
  bulk_id: number;
  number: string;
  message: string;
  status: string;
  type: string;
  confirm_state: string;
  created_at: string;
  sent_at: string;
  recipients_count: number;
  valid_recipients_count: number;
  page: number;
  cost: number;
  payback_cost: number;
  description: string;
}

/**
 * 
 * Get a sms properties
 * 
 * @param {number} bulk_id - Id of the message to get. Example: 52738671
 * @returns {Promise<IFarazGetSMSResult>} - A Promise of type IFarazGetSMSResult
 * @link Also checkout http://docs.ippanel.com/#operation/GetSMS
 */
export async function farazGetSMS ( bulk_id: number ): Promise<IFarazGetSMSResult> {
  try {
    const { data } = await axios.get<IFarazGetSMSResult>( `http://rest.ippanel.com/v1/messages/${ bulk_id }`, {
      headers: {
        Authorization: farazSMS.accessKey
      }
    } );
    return data;
  } catch ( error: any ) {
    throw new Error( error.response.data );
  }
}