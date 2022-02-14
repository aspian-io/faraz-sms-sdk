import axios from "axios";
import { farazSMS } from "./faraz-sms";

export interface IFarazCreatePatternResult {
  value: IFarazCreatePatternValue;
}

export interface IFarazCreatePatternValue {
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
export async function farazCreatePattern ( pattern: string, description: string, is_shared: boolean ): Promise<IFarazCreatePatternResult> {
  try {
    const { data } = await axios.post<IFarazCreatePatternResult>( "http://rest.ippanel.com/v1/messages/patterns", {
      pattern,
      description,
      is_shared
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