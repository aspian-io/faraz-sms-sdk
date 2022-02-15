import axios from "axios";
import { farazSMS } from "./faraz-sms";

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
 * @param {Object} values - Pattern values
 * @returns {Promise<IFarazSendPatternResult>} - A Promise of type IFarazSendPatternResult
 * @link Also checkout http://docs.ippanel.com/#operation/SendPattern
 */
export async function farazSendPattern (
  pattern_code: string,
  originator: string,
  recipient: string,
  values: {
    name: string;
  }
): Promise<IFarazSendPatternResult> {
  try {
    const { data } = await axios.post<IFarazSendPatternResult>( "http://rest.ippanel.com/v1/messages/patterns/send", {
      pattern_code,
      originator,
      recipient,
      values
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