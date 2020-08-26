import { gql } from "apollo-boost";

export const findUserById = gql`
  query ($id: ID) {
    user(id: $id) {
      id
      name
      lastname
      email
      role
    }
  }
`

export const findApartment = gql`
  query ($checkInDate: String, $checkOutDate: String, $price: Int, $numberOfRooms: Int) {
    apartments(checkInDate: $checkInDate, checkOutDate: $checkOutDate, price: $price, numberOfRooms: $numberOfRooms) {
      id
      name
      description
      image
      price
      numberOfRooms
      checkInDate
      checkOutDate
      user {
        id
        name
        lastname
        email
      }
    }
  }
`

export const findVouchers = gql`
  query ($variant: VoucherVariant, $quantity: Int) {
    vouchers(variant: $variant, quantity: $quantity) {
      id
      name
      description
      image
      price
      quantity
      variant
      user {
        id
        name
        lastname
        email
      }
    }
  }
`