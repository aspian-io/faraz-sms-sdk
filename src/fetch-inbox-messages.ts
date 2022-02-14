import axios from "axios";
import { farazSMS } from "./faraz-sms";

export interface IFarazFetchInboxMessagesResult {
  status: string;
  code: number;
  message: string;
  data: IFarazFetchInboxMessagesData;
  meta: IFarazFetchInboxMessagesMeta;
}

export interface IFarazFetchInboxMessagesData {
  messages: IFarazFetchInboxMessagesMsg[];
}

export interface IFarazFetchInboxMessagesMsg {
  number: string;
  message: string;
  sender: string;
  time: string;
  type: string;
}

export interface IFarazFetchInboxMessagesMeta {
  total: number;
  pages: number;
  limit: number;
  page: number;
  prev?: string;
  next?: string;
}

/**
 * 
 * Fetch inbox messages
 * 
 * @returns {Promise<IFarazFetchInboxMessagesResult>} - A Promise of type IFarazFetchInboxMessagesResult
 * @link Also checkout http://docs.ippanel.com/#operation/FetchInboxMessages
 */
export async function farazFetchInboxMessages (): Promise<IFarazFetchInboxMessagesResult> {
  try {
    const { data } = await axios.get<IFarazFetchInboxMessagesResult>( "http://rest.ippanel.com/v1/messages/inbox", {
      headers: {
        Authorization: farazSMS.accessKey
      }
    } );
    return data;
  } catch ( error: any ) {
    throw new Error( error.response.data );
  }
}