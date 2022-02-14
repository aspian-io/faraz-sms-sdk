import axios from "axios";
import { farazSMS } from "./faraz-sms";

export interface IFarazSendSMSResult {
  value: IFarazSendSMSValue;
}

export interface IFarazSendSMSValue {
  status: string;
  code: number;
  message: string;
  data: IFarazSendSMSData;
}

export interface IFarazSendSMSData {
  bulk_id: number;
}

/**
 * 
 * Send SMS
 * 
 * @param {string} originator - Your line number to send message from that
 * @param {string[]} recipients - Recipients numbers
 * @param {string} message - Message to send
 * @returns {Promise<IFarazSendSMSResult>} - A Promise of type IFarazSendSMSResult
 * @link Also checkout http://docs.ippanel.com/#operation/SendSMS
 */
export async function farazSendSMS ( originator: string, recipients: string[], message: string ): Promise<IFarazSendSMSResult> {
  try {
    const { data } = await axios.post<IFarazSendSMSResult>( "http://rest.ippanel.com/v1/messages", {
      originator,
      recipients,
      message
    }, {
      headers: {
        Authorization: farazSMS.accessKey
      }
    } );
    return data;
  } catch ( error: any ) {
    throw new Error( error.response.data );
  }
}