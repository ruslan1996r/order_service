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
    id: String,
    name: String,
    lastname: String,
    email: String,
    role: UserRole
}

interface IApartment {
    id: String,
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
    id: String,
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