import { gql } from "apollo-boost"

export const registerUser = gql`
    mutation ($name: String!, $lastname: String!, $email: String!, $role: UserRole) {
    registerUser(name: $name, lastname: $lastname, email: $email, role: $role) {
        name
        lastname
        email
        role
    }
    }
`
export const loginUser = gql`
    mutation ($email: String!) {
    loginUser(email: $email) {
        name
        lastname
        email
        role
    }
    }
`

export const addApartment = gql`
mutation ($name: String!, $description: String!, $image: String, $price: Int!, $numberOfRooms: Int!, $checkInDate: String!, $checkOutDate: String!) {
  addApartment(name: $name, description: $description, image: $image, price: $price, numberOfRooms: $numberOfRooms, checkInDate: $checkInDate, checkOutDate: $checkOutDate) {
    id
    name
    description
    image
    price
    numberOfRooms
    checkInDate
    checkOutDate
  }
}
`

export const editApartment = gql`
mutation ($id: ID, $name: String!, $description: String!, $image: String, $price: Int!, $numberOfRooms: Int!, $checkInDate: String!, $checkOutDate: String!) {
  editApartment(id: $id, name: $name, description: $description, image: $image, price: $price, numberOfRooms: $numberOfRooms, checkInDate: $checkInDate, checkOutDate: $checkOutDate) {
    id
    name
    description
    image
    price
    numberOfRooms
    checkInDate
    checkOutDate
  }
}
`

export const bookAnApartment = gql`
mutation ($id: ID!, $userId: ID!) {
  bookAnApartment(id: $id, userId: $userId) {
    id
    name
    user {
      name
    }
  }
}
`

export const addVoucher = gql`
mutation ($name: String!, $description: String!, $image: String, $price: Int!, $quantity: Int!, $variant: VoucherVariant) {
  addVoucher(name: $name, description: $description, image: $image, price: $price, quantity: $quantity, variant: $variant) {
    id
    name
    description
    image
    price
    quantity
    variant
  }
}
`
export const editVoucher = gql`
mutation ($id: ID!, $name: String!, $description: String!, $image: String!, $price: Int!, $quantity: Int!, $variant: VoucherVariant!) {
  editVoucher(id: $id, name: $name, description: $description, image: $image, price: $price, quantity: $quantity, variant: $variant) {
    id
    name
    description
    image
    price
    quantity
    variant
  }
}
`

export const bookAVoucher = gql`
mutation ($id: ID!, $userId: ID!) {
  bookAVoucher(id: $id, userId: $userId) {
    id
    name
    user {
      name
    }
  }
}
`