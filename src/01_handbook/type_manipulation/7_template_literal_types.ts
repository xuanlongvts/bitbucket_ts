// -------------------------------- Introduction
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
//   ^ = type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

// For each interpolated
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
//   ^ = type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

//-- string unions in types
type PropEventSource<T> = {
	on(eventName: `${string & keyof T}changed`, callback: (newValue: any) => void): void;
};
declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;
const person_1 = makeWatchedObject({
	firstName: "Long",
	lastName: "Le",
	age: 20,
});
person_1.on("firstNamechanged", () => {});
person_1.on("lastNamechanged", () => {});
person_1.on("agechanged", () => {});
// person_1.on("firsName", () => {}); // error

// -------------------------------- Intrinsic String Manipulation Types
//-- Uppercase<StringType>
type Getting_1 = "hello, world";
type ShoutGreeting = Uppercase<Getting_1>; // type ShoutGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">; // type MainID = "ID-MY_APP"

//-- Lowercase<StringType>
type Getting_2 = "HELLO, WORLD";
type QuietGreeting = Lowercase<Getting_2>; // type QuietGreeting = "hello, world"

type ASCIICachekey_1<Str extends string> = `id-${Lowercase<Str>}`;
type MainID_1 = ASCIICachekey_1<"MY_APP">; // type MainID_1 = "id-my_app"

//-- Capitalize<StringType>
type LowercaseGetting = "hellow, world";
type Getting_3 = Capitalize<LowercaseGetting>; // type Getting_3 = "Hellow, world"

//-- Uncapitalize<StringType>
type UppercaseGreeting_4 = "HELLO, WOLD";
type Getting_4 = Uncapitalize<UppercaseGreeting_4>; // type Getting_4 = "hELLO, WOLD"
