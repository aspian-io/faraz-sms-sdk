"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.farazGetMessageRecipientsStatus = exports.FarazGetMsgRecipientsStatusEnum = void 0;
const axios_1 = __importDefault(require("axios"));
const faraz_sms_1 = require("./faraz-sms");
var FarazGetMsgRecipientsStatusEnum;
(function (FarazGetMsgRecipientsStatusEnum) {
    FarazGetMsgRecipientsStatusEnum["send"] = "send";
    FarazGetMsgRecipientsStatusEnum["discarded"] = "discarded";
    FarazGetMsgRecipientsStatusEnum["pending"] = "pending";
    FarazGetMsgRecipientsStatusEnum["failed"] = "failed";
})(FarazGetMsgRecipientsStatusEnum = exports.FarazGetMsgRecipientsStatusEnum || (exports.FarazGetMsgRecipientsStatusEnum = {}));
/**
 *
 * Get a sms recipients status
 *
 * @param {number} bulk_id - Id of the message to get. Example: 52738671
 * @returns {Promise<IFarazGetMsgRecipientsStatusResult>} - A Promise of type IFarazGetMsgRecipientsStatusResult
 * @link Also checkout http://docs.ippanel.com/#operation/GetMessageRecipientsStatus
 */
function farazGetMessageRecipientsStatus(bulk_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(`http://rest.ippanel.com/v1/messages/${bulk_id}/recipients`, {
                headers: {
                    Authorization: faraz_sms_1.farazSMS.accessKey
                }
            });
            return data;
        }
        catch (error) {
            throw new Error(error.response.data);
        }
    });
}
exports.farazGetMessageRecipientsStatus = farazGetMessageRecipientsStatus;
