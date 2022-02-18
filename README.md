<div align="center">
  <img src="https://img.shields.io/npm/v/@aspianet/faraz-sms">
  <img src="https://img.shields.io/npm/dw/@aspianet/faraz-sms">
  <img src="https://img.shields.io/github/issues-raw/aspian-io/faraz-sms-sdk">
  <img src="https://img.shields.io/npm/l/@aspianet/faraz-sms">
  <img src="https://img.shields.io/npm/types/@aspianet/faraz-sms">
</div>

<br>

<div align="center">
  <img align="center" src="https://user-images.githubusercontent.com/5561368/153906136-a4763186-ac81-4764-ad3e-262220b47480.png">
  <br/>
  <div align="center">Created by ASPIANET - Omid Rouhani</div>
  <div align="center">تولید شده توسط آسپیانت - امید روحانی</div>
</div>

<br/>

<div dir="rtl">


- [فارسی](#درباره-پنل-اساماس-فراز-اساماس)
- [English](#about-faraz-sms)

<br/>


# درباره پنل اس‌ام‌اس فراز اس‌ام‌اس
سرویس دهنده پیامک [فراز اس‌ام‌اس](https://farazsms.com/) یک پنل پیامکی دارای امکانات گسترده و خدمات ارسال پیامک از طریق پنل کاربری و وب سرویس به شرح زیر می باشد:

- ارائه خط خدماتی بدون نیاز به سفته برای عبور از بلک لیست مخابراتی
- بانک شماره موبایل به تفکیک استان،شهر، منطقه، مشاغل،سن و جنسیت و BTS
- سامانه پیامکی همراه با اپلیکیشن اندروید ارسال پیامک
- پنل پیامک خدماتی سازگار با افزونه‌های پیامکی معتبر
- سامانه پیامکی بدون نیاز به تمدید سالانه (Life Time)

# بسته توسعه نرم افزاری فراز اس‌ام‌اس 
بسته غیر رسمی توسعه نرم افزاری [فراز اس‌ام‌اس](https://farazsms.com) برای استفاده در محیط پلتفرم NodeJS به همراه JavaScript یا TypeScript ایجاد شده است. 
این بسته توسط تایپ اسکریپت با استفاده از [مستندات رسمی REST API فراز اس‌ام‌اس](http://docs.ippanel.com) برای تسهیل استفاده از امکانات این سرویس دهنده اس‌ام‌اس توسط برنامه نویسان جاوااسکریپت و تایپ اسکریپت و به دلیل عدم ارائه یک SDK مناسب برای NodeJS یا ارائه بسته ناقص یا دارای ایراد توسط اغلب سرویس دهندگان اس‌ام‌اس، تولید گردیده است.

## روش نصب
<div dir="ltr">
  
```sh
npm install @aspianet/faraz-sms
```

  </div>
  
## کاربرد
قبل از هر چیز شما نیازمند دریافت کلید API از پنل کاربری خود در فراز اس ام‌اس هستید تا بتوانید به واسطه آن SDK موجود را مقداردهی اولیه و راه اندازی کنید. برای مثال، شما می توانید کد زیر را در فایل اصلی اپلیکیشن اکسپرس خود (مانند app.js) ایجاد و با کلید API مقداردهی نمایید تا بتوانید در هر فایل دیگر اپلیکیشن خود بدون استفاده مکرر از این کلید از سایر امکانات SDK استفاده نمایید:
<div dir="ltr">
  
```ts
import { farazSMS } from '@aspianet/faraz-sms';

farazSMS.init( "YOUR_API_KEY" );
```

  </div>
  
سپس، به سادگی می تونید اولین پیامک خود را با استفاده از کد زیر ارسال نمایید:
<div dir="ltr">
  
```ts
import { farazSendSMS } from '@aspianet/faraz-sms';

await farazSendSMS( 'sender_number', [ 'recipient_number' ], `Text message to send` );
```

  </div>
  
دقت نمایید در صورتی که از خطوط اشتراکی فراز اس‌ام‌اس استفاده می کنید، ارسال پیامک، بدون الگو، به دلیل نیاز به تایید انسانی بین ۵ تا ۱۰ دقیقه زمانبر خواهد بود. به همین علت در صورت نیاز به ارسال سریع پیامک از طریق خطوط اشتراکی، می بایست از الگوهای ارسال پیامک Pattern استفاده نمود، که در این صورت، زمان ارسال پیامک به دلیل عدم نیاز به تایید نیروی انسانی به کمتر از ۵ ثانیه کاهش یافته و تسریع می گردد.

جهت ایجاد الگوی ارسال پیامک ۲ راه وجود  دارد:

۱- تولید الگو از طریق مراجعه به منوی اصلی پنل کاربری فراز اس‌ام‌اس و انتخاب گزینه **ارسال بر اساس پترن** و تولید پترن و استفاده از آن توسط **کد الگو** پس از تایید.

  ۲- تولید الگو توسط تابع **farazCreatePattern** و استفاده از **کد الگو** جهت ارسال پیامک با الگو، پس از تایید شدن آن در پنل کاربری. 



**نمونه پترن یا الگوی پیامک:**
<div dir="ltr">
  
```
const samplePattern = `Welcome to our website dear %name%.
                       www.example-company.com
                       Company name`;
```

  </div>
  
**نمونه ساختن پترن یا الگو توسط API:**
<div dir="ltr">
  
```ts
import { farazCreatePattern } from "@aspianet/faraz-sms";

const result = await farazCreatePattern( samplePattern, "DESCRIPTION", false );
const patternCode = result.data.pattern.code;
console.log( "Created pattern code is: ", patternCode );
```

  </div>
  
پس از تولید پترن یا الگو به یکی از طرق ممکن و تایید شدن (فعال شدن) آن در پنل کاربری، می توانید با استفاده از تابع زیر و با بهره‌گیری از کد الگو، پیامک خود را به روش سریع (زمان ارسال کمتر از ۵ ثانیه) ارسال نمایید: (توجه نمایید که استفاده از کد الگو، قبل از تایید در پنل کاربری و فعال شدن آن امکان پذیر نمی باشد)

<div dir="ltr">
  
```ts
import { farazSendPattern } from "@aspianet/faraz-sms";

await farazSendPattern( patternCode, "originator", "recipient", { name: "John" } );
```

  </div>
  

## رابط برنامه نویسی یا API
در اینجا می توانید تمام توابع پشتیبانی شده در این SDK برای استفاده از قابلیت های کامل موجود در [مستندات رسمی REST API فراز اس‌ام‌اس](http://docs.ippanel.com) را با خلاصه عملکرد آن ها مشاهده نمایید: 

<div dir="ltr">
  
| تابع | توضیحات |
| -------- | ----------- |
| farazAuth | دریافت اطلاعات کاربر احراز هویت شده |
| farazCredit | دریافت میزان باقی مانده اعتبار کاربر |
| farazSendSMS | ارسال پیامک |
| farazGetSMS | دریافت اطلاعات پیامک با شناسه آن |
| farazCreatePattern | ایجاد یک الگو یا پترن پیامک |
| farazSendPattern | ارسال یک پیامک با استفاده از کد پترن ساخته و فعال شده |
| farazGetMessageRecipientsStatus | دریافت اطلاعات وضعیت ارسال پیامک به گیرندگان |
| farazFetchInboxMessages | دریافت تمامی پیام های صندوق پیام |
  
</div>

<br>
<br>

</div>


# About Faraz SMS
[Faraz SMS](https://farazsms.com/) is an advanced Iranian (Persian) SMS service provider which can be used by people or developers for ads or as a web service for their websites or web applications.

# Faraz SMS SDK
Unofficial SDK for Faraz SMS REST API to work with NodeJS and TypeScript or JavaScript.

## Install
```sh
npm install @aspianet/faraz-sms
```
## Usage
First of all, you need to initialize FarazSMS by using the **API key** which you get from your admin panel in [FarazSMS website](https://farazsms.com/).
For example you need to add these lines of code in the root file of your Express application (e.g. app.js) to initialize FarazSMS:
```ts
import { farazSMS } from '@aspianet/faraz-sms';

farazSMS.init( "YOUR_API_KEY" );
```
Then, you can simply send your first sms by using **farazSendSMS** function like this:
```ts
import { farazSendSMS } from '@aspianet/faraz-sms';

await farazSendSMS( 'sender_number', [ 'recipient_number' ], `Text message to send` );
```
You can also send your messages by using an approved pattern to send it much faster (less than 5 seconds). For doing so, firstly, you need to add a pattern for your message through Faraz SMS admin panel by clicking on (ارسال بر اساس پترن) option from main menu and wait for the sent pattern to be approved. Or, alternatively, you can use **farazCreatePattern** function to create an SMS pattern like this:

**pattern sample:**
```
const samplePattern = `Welcome to our website dear %name%.
                       www.example-company.com
                       Company name`;
```
**Create a pattern by using API:**
```ts
import { farazCreatePattern } from "@aspianet/faraz-sms";

const result = await farazCreatePattern( samplePattern, "DESCRIPTION", false );
const patternCode = result.data.pattern.code;
console.log( "Created pattern code is: ", patternCode );
```

then, you can use **pattern's code** to send your messages quickly by using it as the following function's argument:

```ts
import { farazSendPattern } from "@aspianet/faraz-sms";

await farazSendPattern( patternCode, "originator", "recipient", { name: "John" } );
```

## API
Here you can see all supported functions in this package to make use of all functionalities exist in [FarazSMS REST API Documentation](http://docs.ippanel.com/).

| Function | Description |
| -------- | ----------- |
| farazAuth | Gets authorized user |
| farazCredit | Gets user's current credit |
| farazSendSMS | Sends SMS |
| farazGetSMS | Gets an SMS properties by its id |
| farazCreatePattern | Creates a message pattern |
| farazSendPattern | Sends message by using created pattern code |
| farazGetMessageRecipientsStatus | Gets a sms recipients status |
| farazFetchInboxMessages | Fetches inbox messages |
