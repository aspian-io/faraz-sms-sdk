/**
 * A class to initialize FarazSMS with you API key
 * @author Omid Rouhani
 * @link Author's GitHub account: https://github.com/aspian-io
 * @link Author's npm account: https://www.npmjs.com/~aspian87
 * @link Author's email address: o.rohani@gmail.com
 */
declare class FarazSMS {
    private _accessKey?;
    get accessKey(): string;
    /**
     *
     * Initialize Faraz SMS service with your API KEY in the root of your application
     *
     * @param {string} apiKey - API KEY which you get from your Faraz SMS Panel
     */
    init(apiKey: string): void;
}
export declare const farazSMS: FarazSMS;
export {};
