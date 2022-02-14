import axios from "axios";
import { farazSMS } from "./faraz-sms";

export interface IFarazGetMsgRecipientsStatusResult {
  status: string;
  code: number;
  message: string;
  data: IFarazGetMsgRecipientsStatusData;
  meta: IFarazGetMsgRecipientsStatusMeta;
}

export interface IFarazGetMsgRecipientsStatusData {
  recipients: IFarazGetMsgRecipient[];
}

export interface IFarazGetMsgRecipient {
  recipient: string;
  status: string;
}

export interface IFarazGetMsgRecipientsStatusMeta {
  total: number;
  pages: number;
  limit: number;
  page: number;
  prev?: string;
  next?: string;
}

/**
 * 
 * Get a sms recipients status
 * 
 * @param {number} bulk_id - Id of the message to get. Example: 52738671
 * @returns {Promise<IFarazGetMsgRecipientsStatusResult>} - A Promise of type IFarazGetMsgRecipientsStatusResult
 * @link Also checkout http://docs.ippanel.com/#operation/GetMessageRecipientsStatus
 */
export async function farazGetMessageRecipientsStatus ( bulk_id: number ): Promise<IFarazGetMsgRecipientsStatusResult> {
  try {
    const { data } = await axios.get<IFarazGetMsgRecipientsStatusResult>( `http://rest.ippanel.com/v1/messages/${ bulk_id }/recipients`, {
      headers: {
        Authorization: farazSMS.accessKey
      }
    } );
    return data;
  } catch ( error: any ) {
    throw new Error( error.response.data );
  }
}