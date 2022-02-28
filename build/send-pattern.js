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
exports.farazSendPattern = void 0;
const axios_1 = __importDefault(require("axios"));
const faraz_sms_1 = require("./faraz-sms");
/**
 *
 * Create message pattern
 *
 * @param {string} pattern_code - Pattern code
 * @param {string} originator - Your line number to send message from that
 * @param {string} recipient - Recipient number
 * @param {T} values - Pattern values is an object of generic type T
 * @returns {Promise<IFarazSendPatternResult>} - A Promise of type IFarazSendPatternResult
 * @link Also checkout http://docs.ippanel.com/#operation/SendPattern
 */
function farazSendPattern(pattern_code, originator, recipient, values) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.post("http://rest.ippanel.com/v1/messages/patterns/send", {
                pattern_code,
                originator,
                recipient,
                values
            }, {
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
exports.farazSendPattern = farazSendPattern;
