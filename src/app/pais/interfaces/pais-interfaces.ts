// To parse this data:
//
//   import { Convert } from "./file";
//
//   const Country = Convert.toCountry(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    KWD?: Aed;
    USD?: Aed;
    CHF?: Aed;
    MDL?: Aed;
    AOA?: Aed;
    BOB?: Aed;
    AUD?: Aed;
    TVD?: Aed;
    PEN?: Aed;
    XPF?: Aed;
    EUR?: Aed;
    BWP?: Aed;
    AFN?: Aed;
    HUF?: Aed;
    XOF?: Aed;
    CAD?: Aed;
    IDR?: Aed;
    TWD?: Aed;
    XCD?: Aed;
    AWG?: Aed;
    XAF?: Aed;
    SHP?: Aed;
    LRD?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    SOS?: Aed;
    DKK?: Aed;
    FOK?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    BYN?: Aed;
    BBD?: Aed;
    TND?: Aed;
    ILS?: Aed;
    MMK?: Aed;
    DJF?: Aed;
    GIP?: Aed;
    CDF?: Aed;
    BMD?: Aed;
    GBP?: Aed;
    RUB?: Aed;
    JPY?: Aed;
    KYD?: Aed;
    HNL?: Aed;
    BIF?: Aed;
    PYG?: Aed;
    ARS?: Aed;
    STN?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    SDG?: BAM;
    KGS?: Aed;
    BRL?: Aed;
    KHR?: Aed;
    GTQ?: Aed;
    AZN?: Aed;
    MYR?: Aed;
    COP?: Aed;
    BHD?: Aed;
    CLP?: Aed;
    MKD?: Aed;
    MZN?: Aed;
    ETB?: Aed;
    INR?: Aed;
    KZT?: Aed;
    OMR?: Aed;
    AED?: Aed;
    PLN?: Aed;
    LKR?: Aed;
    TJS?: Aed;
    SYP?: Aed;
    LYD?: Aed;
    HTG?: Aed;
    TOP?: Aed;
    GEL?: Aed;
    ERN?: Aed;
    TZS?: Aed;
    CZK?: Aed;
    BTN?: Aed;
    EGP?: Aed;
    VND?: Aed;
    PGK?: Aed;
    BSD?: Aed;
    HRK?: Aed;
    UZS?: Aed;
    GYD?: Aed;
    YER?: Aed;
    MWK?: Aed;
    GMD?: Aed;
    PAB?: Aed;
    IMP?: Aed;
    KRW?: Aed;
    GGP?: Aed;
    PKR?: Aed;
    NZD?: Aed;
    AMD?: Aed;
    TMT?: Aed;
    DOP?: Aed;
    SBD?: Aed;
    VUV?: Aed;
    MGA?: Aed;
    LAK?: Aed;
    CKD?: Aed;
    MNT?: Aed;
    SZL?: Aed;
    ISK?: Aed;
    NPR?: Aed;
    GHS?: Aed;
    IQD?: Aed;
    THB?: Aed;
    RSD?: Aed;
    UGX?: Aed;
    SAR?: Aed;
    JOD?: Aed;
    SRD?: Aed;
    KES?: Aed;
    MXN?: Aed;
    BAM?: BAM;
    BGN?: Aed;
    FKP?: Aed;
    GNF?: Aed;
    LBP?: Aed;
    MUR?: Aed;
    NOK?: Aed;
    KMF?: Aed;
    VES?: Aed;
    IRR?: Aed;
    SEK?: Aed;
    FJD?: Aed;
    PHP?: Aed;
    HKD?: Aed;
    UYU?: Aed;
    MOP?: Aed;
    TTD?: Aed;
    RWF?: Aed;
    ALL?: Aed;
    KPW?: Aed;
    MVR?: Aed;
    SGD?: Aed;
    ZWL?: Aed;
    QAR?: Aed;
    ANG?: Aed;
    CRC?: Aed;
    CVE?: Aed;
    RON?: Aed;
    SLL?: Aed;
    NIO?: Aed;
    JMD?: Aed;
    JEP?: Aed;
    WST?: Aed;
    NGN?: Aed;
    ZMW?: Aed;
    UAH?: Aed;
    CNY?: Aed;
    SSP?: Aed;
    BDT?: Aed;
    NAD?: Aed;
    BND?: Aed;
    KID?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCountry(json: string): Country[] {
        return cast(JSON.parse(json), a(r("Country")));
    }

    public static CountryToJson(value: Country[]): string {
        return JSON.stringify(uncast(value, a(r("Country"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Country": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "tld", js: "tld", typ: a("") },
        { json: "cca2", js: "cca2", typ: "" },
        { json: "ccn3", js: "ccn3", typ: "" },
        { json: "cca3", js: "cca3", typ: "" },
        { json: "cioc", js: "cioc", typ: u(undefined, "") },
        { json: "independent", js: "independent", typ: true },
        { json: "status", js: "status", typ: r("Status") },
        { json: "unMember", js: "unMember", typ: true },
        { json: "currencies", js: "currencies", typ: u(undefined, r("Currencies")) },
        { json: "idd", js: "idd", typ: r("Idd") },
        { json: "capital", js: "capital", typ: u(undefined, a("")) },
        { json: "altSpellings", js: "altSpellings", typ: a("") },
        { json: "region", js: "region", typ: r("Region") },
        { json: "subregion", js: "subregion", typ: u(undefined, "") },
        { json: "languages", js: "languages", typ: u(undefined, m("")) },
        { json: "translations", js: "translations", typ: m(r("Translation")) },
        { json: "latlng", js: "latlng", typ: a(3.14) },
        { json: "landlocked", js: "landlocked", typ: true },
        { json: "borders", js: "borders", typ: u(undefined, a("")) },
        { json: "area", js: "area", typ: 3.14 },
        { json: "demonyms", js: "demonyms", typ: u(undefined, r("Demonyms")) },
        { json: "flag", js: "flag", typ: "" },
        { json: "maps", js: "maps", typ: r("Maps") },
        { json: "population", js: "population", typ: 0 },
        { json: "fifa", js: "fifa", typ: u(undefined, "") },
        { json: "car", js: "car", typ: r("Car") },
        { json: "timezones", js: "timezones", typ: a("") },
        { json: "continents", js: "continents", typ: a(r("Continent")) },
        { json: "flags", js: "flags", typ: r("CoatOfArms") },
        { json: "coatOfArms", js: "coatOfArms", typ: r("CoatOfArms") },
        { json: "startOfWeek", js: "startOfWeek", typ: r("StartOfWeek") },
        { json: "capitalInfo", js: "capitalInfo", typ: r("CapitalInfo") },
        { json: "postalCode", js: "postalCode", typ: u(undefined, r("PostalCode")) },
        { json: "gini", js: "gini", typ: u(undefined, m(3.14)) },
    ], false),
    "CapitalInfo": o([
        { json: "latlng", js: "latlng", typ: u(undefined, a(3.14)) },
    ], false),
    "Car": o([
        { json: "signs", js: "signs", typ: u(undefined, a("")) },
        { json: "side", js: "side", typ: r("Side") },
    ], false),
    "CoatOfArms": o([
        { json: "png", js: "png", typ: u(undefined, "") },
        { json: "svg", js: "svg", typ: u(undefined, "") },
    ], false),
    "Currencies": o([
        { json: "KWD", js: "KWD", typ: u(undefined, r("Aed")) },
        { json: "USD", js: "USD", typ: u(undefined, r("Aed")) },
        { json: "CHF", js: "CHF", typ: u(undefined, r("Aed")) },
        { json: "MDL", js: "MDL", typ: u(undefined, r("Aed")) },
        { json: "AOA", js: "AOA", typ: u(undefined, r("Aed")) },
        { json: "BOB", js: "BOB", typ: u(undefined, r("Aed")) },
        { json: "AUD", js: "AUD", typ: u(undefined, r("Aed")) },
        { json: "TVD", js: "TVD", typ: u(undefined, r("Aed")) },
        { json: "PEN", js: "PEN", typ: u(undefined, r("Aed")) },
        { json: "XPF", js: "XPF", typ: u(undefined, r("Aed")) },
        { json: "EUR", js: "EUR", typ: u(undefined, r("Aed")) },
        { json: "BWP", js: "BWP", typ: u(undefined, r("Aed")) },
        { json: "AFN", js: "AFN", typ: u(undefined, r("Aed")) },
        { json: "HUF", js: "HUF", typ: u(undefined, r("Aed")) },
        { json: "XOF", js: "XOF", typ: u(undefined, r("Aed")) },
        { json: "CAD", js: "CAD", typ: u(undefined, r("Aed")) },
        { json: "IDR", js: "IDR", typ: u(undefined, r("Aed")) },
        { json: "TWD", js: "TWD", typ: u(undefined, r("Aed")) },
        { json: "XCD", js: "XCD", typ: u(undefined, r("Aed")) },
        { json: "AWG", js: "AWG", typ: u(undefined, r("Aed")) },
        { json: "XAF", js: "XAF", typ: u(undefined, r("Aed")) },
        { json: "SHP", js: "SHP", typ: u(undefined, r("Aed")) },
        { json: "LRD", js: "LRD", typ: u(undefined, r("Aed")) },
        { json: "DZD", js: "DZD", typ: u(undefined, r("Aed")) },
        { json: "MAD", js: "MAD", typ: u(undefined, r("Aed")) },
        { json: "MRU", js: "MRU", typ: u(undefined, r("Aed")) },
        { json: "SOS", js: "SOS", typ: u(undefined, r("Aed")) },
        { json: "DKK", js: "DKK", typ: u(undefined, r("Aed")) },
        { json: "FOK", js: "FOK", typ: u(undefined, r("Aed")) },
        { json: "CUC", js: "CUC", typ: u(undefined, r("Aed")) },
        { json: "CUP", js: "CUP", typ: u(undefined, r("Aed")) },
        { json: "BYN", js: "BYN", typ: u(undefined, r("Aed")) },
        { json: "BBD", js: "BBD", typ: u(undefined, r("Aed")) },
        { json: "TND", js: "TND", typ: u(undefined, r("Aed")) },
        { json: "ILS", js: "ILS", typ: u(undefined, r("Aed")) },
        { json: "MMK", js: "MMK", typ: u(undefined, r("Aed")) },
        { json: "DJF", js: "DJF", typ: u(undefined, r("Aed")) },
        { json: "GIP", js: "GIP", typ: u(undefined, r("Aed")) },
        { json: "CDF", js: "CDF", typ: u(undefined, r("Aed")) },
        { json: "BMD", js: "BMD", typ: u(undefined, r("Aed")) },
        { json: "GBP", js: "GBP", typ: u(undefined, r("Aed")) },
        { json: "RUB", js: "RUB", typ: u(undefined, r("Aed")) },
        { json: "JPY", js: "JPY", typ: u(undefined, r("Aed")) },
        { json: "KYD", js: "KYD", typ: u(undefined, r("Aed")) },
        { json: "HNL", js: "HNL", typ: u(undefined, r("Aed")) },
        { json: "BIF", js: "BIF", typ: u(undefined, r("Aed")) },
        { json: "PYG", js: "PYG", typ: u(undefined, r("Aed")) },
        { json: "ARS", js: "ARS", typ: u(undefined, r("Aed")) },
        { json: "STN", js: "STN", typ: u(undefined, r("Aed")) },
        { json: "LSL", js: "LSL", typ: u(undefined, r("Aed")) },
        { json: "ZAR", js: "ZAR", typ: u(undefined, r("Aed")) },
        { json: "SDG", js: "SDG", typ: u(undefined, r("BAM")) },
        { json: "KGS", js: "KGS", typ: u(undefined, r("Aed")) },
        { json: "BRL", js: "BRL", typ: u(undefined, r("Aed")) },
        { json: "KHR", js: "KHR", typ: u(undefined, r("Aed")) },
        { json: "GTQ", js: "GTQ", typ: u(undefined, r("Aed")) },
        { json: "AZN", js: "AZN", typ: u(undefined, r("Aed")) },
        { json: "MYR", js: "MYR", typ: u(undefined, r("Aed")) },
        { json: "COP", js: "COP", typ: u(undefined, r("Aed")) },
        { json: "BHD", js: "BHD", typ: u(undefined, r("Aed")) },
        { json: "CLP", js: "CLP", typ: u(undefined, r("Aed")) },
        { json: "MKD", js: "MKD", typ: u(undefined, r("Aed")) },
        { json: "MZN", js: "MZN", typ: u(undefined, r("Aed")) },
        { json: "ETB", js: "ETB", typ: u(undefined, r("Aed")) },
        { json: "INR", js: "INR", typ: u(undefined, r("Aed")) },
        { json: "KZT", js: "KZT", typ: u(undefined, r("Aed")) },
        { json: "OMR", js: "OMR", typ: u(undefined, r("Aed")) },
        { json: "AED", js: "AED", typ: u(undefined, r("Aed")) },
        { json: "PLN", js: "PLN", typ: u(undefined, r("Aed")) },
        { json: "LKR", js: "LKR", typ: u(undefined, r("Aed")) },
        { json: "TJS", js: "TJS", typ: u(undefined, r("Aed")) },
        { json: "SYP", js: "SYP", typ: u(undefined, r("Aed")) },
        { json: "LYD", js: "LYD", typ: u(undefined, r("Aed")) },
        { json: "HTG", js: "HTG", typ: u(undefined, r("Aed")) },
        { json: "TOP", js: "TOP", typ: u(undefined, r("Aed")) },
        { json: "GEL", js: "GEL", typ: u(undefined, r("Aed")) },
        { json: "ERN", js: "ERN", typ: u(undefined, r("Aed")) },
        { json: "TZS", js: "TZS", typ: u(undefined, r("Aed")) },
        { json: "CZK", js: "CZK", typ: u(undefined, r("Aed")) },
        { json: "BTN", js: "BTN", typ: u(undefined, r("Aed")) },
        { json: "EGP", js: "EGP", typ: u(undefined, r("Aed")) },
        { json: "VND", js: "VND", typ: u(undefined, r("Aed")) },
        { json: "PGK", js: "PGK", typ: u(undefined, r("Aed")) },
        { json: "BSD", js: "BSD", typ: u(undefined, r("Aed")) },
        { json: "HRK", js: "HRK", typ: u(undefined, r("Aed")) },
        { json: "UZS", js: "UZS", typ: u(undefined, r("Aed")) },
        { json: "GYD", js: "GYD", typ: u(undefined, r("Aed")) },
        { json: "YER", js: "YER", typ: u(undefined, r("Aed")) },
        { json: "MWK", js: "MWK", typ: u(undefined, r("Aed")) },
        { json: "GMD", js: "GMD", typ: u(undefined, r("Aed")) },
        { json: "PAB", js: "PAB", typ: u(undefined, r("Aed")) },
        { json: "IMP", js: "IMP", typ: u(undefined, r("Aed")) },
        { json: "KRW", js: "KRW", typ: u(undefined, r("Aed")) },
        { json: "GGP", js: "GGP", typ: u(undefined, r("Aed")) },
        { json: "PKR", js: "PKR", typ: u(undefined, r("Aed")) },
        { json: "NZD", js: "NZD", typ: u(undefined, r("Aed")) },
        { json: "AMD", js: "AMD", typ: u(undefined, r("Aed")) },
        { json: "TMT", js: "TMT", typ: u(undefined, r("Aed")) },
        { json: "DOP", js: "DOP", typ: u(undefined, r("Aed")) },
        { json: "SBD", js: "SBD", typ: u(undefined, r("Aed")) },
        { json: "VUV", js: "VUV", typ: u(undefined, r("Aed")) },
        { json: "MGA", js: "MGA", typ: u(undefined, r("Aed")) },
        { json: "LAK", js: "LAK", typ: u(undefined, r("Aed")) },
        { json: "CKD", js: "CKD", typ: u(undefined, r("Aed")) },
        { json: "MNT", js: "MNT", typ: u(undefined, r("Aed")) },
        { json: "SZL", js: "SZL", typ: u(undefined, r("Aed")) },
        { json: "ISK", js: "ISK", typ: u(undefined, r("Aed")) },
        { json: "NPR", js: "NPR", typ: u(undefined, r("Aed")) },
        { json: "GHS", js: "GHS", typ: u(undefined, r("Aed")) },
        { json: "IQD", js: "IQD", typ: u(undefined, r("Aed")) },
        { json: "THB", js: "THB", typ: u(undefined, r("Aed")) },
        { json: "RSD", js: "RSD", typ: u(undefined, r("Aed")) },
        { json: "UGX", js: "UGX", typ: u(undefined, r("Aed")) },
        { json: "SAR", js: "SAR", typ: u(undefined, r("Aed")) },
        { json: "JOD", js: "JOD", typ: u(undefined, r("Aed")) },
        { json: "SRD", js: "SRD", typ: u(undefined, r("Aed")) },
        { json: "KES", js: "KES", typ: u(undefined, r("Aed")) },
        { json: "MXN", js: "MXN", typ: u(undefined, r("Aed")) },
        { json: "BAM", js: "BAM", typ: u(undefined, r("BAM")) },
        { json: "BGN", js: "BGN", typ: u(undefined, r("Aed")) },
        { json: "FKP", js: "FKP", typ: u(undefined, r("Aed")) },
        { json: "GNF", js: "GNF", typ: u(undefined, r("Aed")) },
        { json: "LBP", js: "LBP", typ: u(undefined, r("Aed")) },
        { json: "MUR", js: "MUR", typ: u(undefined, r("Aed")) },
        { json: "NOK", js: "NOK", typ: u(undefined, r("Aed")) },
        { json: "KMF", js: "KMF", typ: u(undefined, r("Aed")) },
        { json: "VES", js: "VES", typ: u(undefined, r("Aed")) },
        { json: "IRR", js: "IRR", typ: u(undefined, r("Aed")) },
        { json: "SEK", js: "SEK", typ: u(undefined, r("Aed")) },
        { json: "FJD", js: "FJD", typ: u(undefined, r("Aed")) },
        { json: "PHP", js: "PHP", typ: u(undefined, r("Aed")) },
        { json: "HKD", js: "HKD", typ: u(undefined, r("Aed")) },
        { json: "UYU", js: "UYU", typ: u(undefined, r("Aed")) },
        { json: "MOP", js: "MOP", typ: u(undefined, r("Aed")) },
        { json: "TTD", js: "TTD", typ: u(undefined, r("Aed")) },
        { json: "RWF", js: "RWF", typ: u(undefined, r("Aed")) },
        { json: "ALL", js: "ALL", typ: u(undefined, r("Aed")) },
        { json: "KPW", js: "KPW", typ: u(undefined, r("Aed")) },
        { json: "MVR", js: "MVR", typ: u(undefined, r("Aed")) },
        { json: "SGD", js: "SGD", typ: u(undefined, r("Aed")) },
        { json: "ZWL", js: "ZWL", typ: u(undefined, r("Aed")) },
        { json: "QAR", js: "QAR", typ: u(undefined, r("Aed")) },
        { json: "ANG", js: "ANG", typ: u(undefined, r("Aed")) },
        { json: "CRC", js: "CRC", typ: u(undefined, r("Aed")) },
        { json: "CVE", js: "CVE", typ: u(undefined, r("Aed")) },
        { json: "RON", js: "RON", typ: u(undefined, r("Aed")) },
        { json: "SLL", js: "SLL", typ: u(undefined, r("Aed")) },
        { json: "NIO", js: "NIO", typ: u(undefined, r("Aed")) },
        { json: "JMD", js: "JMD", typ: u(undefined, r("Aed")) },
        { json: "JEP", js: "JEP", typ: u(undefined, r("Aed")) },
        { json: "WST", js: "WST", typ: u(undefined, r("Aed")) },
        { json: "NGN", js: "NGN", typ: u(undefined, r("Aed")) },
        { json: "ZMW", js: "ZMW", typ: u(undefined, r("Aed")) },
        { json: "UAH", js: "UAH", typ: u(undefined, r("Aed")) },
        { json: "CNY", js: "CNY", typ: u(undefined, r("Aed")) },
        { json: "SSP", js: "SSP", typ: u(undefined, r("Aed")) },
        { json: "BDT", js: "BDT", typ: u(undefined, r("Aed")) },
        { json: "NAD", js: "NAD", typ: u(undefined, r("Aed")) },
        { json: "BND", js: "BND", typ: u(undefined, r("Aed")) },
        { json: "KID", js: "KID", typ: u(undefined, r("Aed")) },
    ], false),
    "Aed": o([
        { json: "name", js: "name", typ: "" },
        { json: "symbol", js: "symbol", typ: "" },
    ], false),
    "BAM": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "Demonyms": o([
        { json: "eng", js: "eng", typ: r("Eng") },
        { json: "fra", js: "fra", typ: u(undefined, r("Eng")) },
    ], false),
    "Eng": o([
        { json: "f", js: "f", typ: "" },
        { json: "m", js: "m", typ: "" },
    ], false),
    "Idd": o([
        { json: "root", js: "root", typ: u(undefined, "") },
        { json: "suffixes", js: "suffixes", typ: u(undefined, a("")) },
    ], false),
    "Maps": o([
        { json: "googleMaps", js: "googleMaps", typ: "" },
        { json: "openStreetMaps", js: "openStreetMaps", typ: "" },
    ], false),
    "Name": o([
        { json: "common", js: "common", typ: "" },
        { json: "official", js: "official", typ: "" },
        { json: "nativeName", js: "nativeName", typ: u(undefined, m(r("Translation"))) },
    ], false),
    "Translation": o([
        { json: "official", js: "official", typ: "" },
        { json: "common", js: "common", typ: "" },
    ], false),
    "PostalCode": o([
        { json: "format", js: "format", typ: "" },
        { json: "regex", js: "regex", typ: u(undefined, "") },
    ], false),
    "Side": [
        "left",
        "right",
    ],
    "Continent": [
        "Africa",
        "Antarctica",
        "Asia",
        "Europe",
        "North America",
        "Oceania",
        "South America",
    ],
    "Region": [
        "Africa",
        "Americas",
        "Antarctic",
        "Asia",
        "Europe",
        "Oceania",
    ],
    "StartOfWeek": [
        "monday",
        "sunday",
        "turday",
    ],
    "Status": [
        "officially-assigned",
    ],
};
