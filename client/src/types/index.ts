import { type } from "os";

type Partial<T> = {
    [K in keyof T]?: T[K];
};

enum UserRole {
    seller = "seller",
    buyer = "buyer",
    admin = "admin"
}

enum VoucherVariant {
    restaurant = "restaurant",
    club = "club",
    museum = "museum",
    cinema = "cinema"
}

interface IUser {
    _id: String,
    name: String,
    lastname: String,
    email: String,
    role: UserRole
}

interface IApartment {
    _id: String,
    userId: String,
    name: String,
    description: String,
    image: String,
    price: Number,
    numberOfRooms: Number,
    checkInDate: String,
    checkOutDate: String,
}

interface IVoucher {
    _id: String,
    userId: String,
    name: String,
    description: String,
    image: String,
    price: Number,
    quantity: Number,
    variant: VoucherVariant,
}

// interface 

export type Apartment = Partial<IApartment>
export type Voucher = Partial<IVoucher>
export type User = Partial<IUser>

// ---------------------------------------------------------------------------------------------------------------------

export interface IBlock {
    acronym: string,
    name: string,
    otherAcronyms: any[],
    otherNames: any[]
}

export interface ILanguages {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export interface ICountry {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: string[],
    languages: ILanguages[],
    translations: string[],
    flag: string,
    regionalBlocs: IBlock[],
    cioc: string,
}
