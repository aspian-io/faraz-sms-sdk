![npm](https://img.shields.io/npm/v/@aspianet/faraz-sms)
![npm](https://img.shields.io/npm/dw/@aspianet/faraz-sms)
![GitHub issues](https://img.shields.io/github/issues-raw/aspian-io/faraz-sms-sdk)
![NPM](https://img.shields.io/npm/l/@aspianet/faraz-sms)
![npm type definitions](https://img.shields.io/npm/types/@aspianet/faraz-sms)

<div align="center">
  <img align="center" src="https://user-images.githubusercontent.com/5561368/153906136-a4763186-ac81-4764-ad3e-262220b47480.png">
  <br/>
  <p align="center">Created by ASPIANET - Omid Rouhani</p>
</div>



# Faraz SMS SDK
Unofficial SDK for Faraz SMS REST API to work with NodeJS and TypeScript or JavaScript

## Install
```sh
npm install @aspianet/faraz-sms
```
## Usage
First of all, you need to initialize FarazSMS by using the **API key** which you get from your admin panel in [FarazSMS website](https://farazsms.com/).
For example you need to add these lines of code in the root file of your Express application (e.g. app.js) to initialize FarazSMS:
```ts
import { farazSMS } from '@aspianet/faraz-sms';

farazSMS.init("YOUR_API_KEY");
```
Then, you can simply send your first sms by using **farazSendSMS** function like this:
```ts
import { farazSendSMS } from '@aspianet/faraz-sms';

await farazSendSMS( 'sender_number', [ 'recipient_number' ], `Text message to send` );
```
## API
You can use other functions in this package to make use of all functionalities exist in [FarazSMS REST API Documentation](http://docs.ippanel.com/).

| Function | Description |
| -------- | ----------- |
| farazAuth | Gets authorized user |
| farazCredit | Gets user credit |
| farazSendSMS | Sends SMS |
| farazGetSMS | Gets a sms properties |
| farazCreatePattern | Creates message pattern |
| farazSendPattern | Creates message pattern |
| farazGetMessageRecipientsStatus | Gets a sms recipients status |
| farazFetchInboxMessages | Fetches inbox messages |

