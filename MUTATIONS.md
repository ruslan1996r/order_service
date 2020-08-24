<!-- Регистрация -->
mutation ($name: String!, $lastname: String!, $email: String!, $role: UserRole) {
  registerUser(name: $name, lastname: $lastname, email: $email, role: $role) {
    name
    lastname
    email
    role
  }
}

{
  "name": "mail",
  "lastname": "Vova",
  "email": "mail@mail.ru",
  "role": "buyer"
}

<!-- Логин -->
mutation ($email: String!) {
  loginUser(email: $email) {
    name
    lastname
    email
    role
  }
}

{
  "email": "mail@mail.ru"
}

<!-- Добавление квартиры -->
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

{
    "name":"Тест квартира",
    "description":"квартира 123123",
    "image": "",
    "price": 42,
    "numberOfRooms":2,
    "checkInDate":"6",
    "checkOutDate":"19"
}

<!-- Изменение квартиры -->
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

{
  "id": "5f42635866430c36046ea35f",
  "name": "Тест квартира 2",
  "description": "квартира 88",
  "image": "",
  "price": 442,
  "numberOfRooms": 22,
  "checkInDate": "16",
  "checkOutDate": "20"
}

<!-- Забронировать комнату -->
mutation ($id: ID!, $userId: ID!) {
  bookAnApartment(id: $id, userId: $userId) {
    id
    name
    user {
      name
    }
  }
}

{
  "id": "5f42635866430c36046ea35f",
  "userId": "5f425aa8b50cf04a30e42334"
}

<!-- Добавление ваучера -->
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

{
  "name": "Voucher 1",
  "description": "random vocher 123",
  "image": "",
  "price": 56,
  "quantity": 4,
  "variant": "museum"
}
<!-- Изменение ваучера -->
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

{
  "id": "5f42743b0104910508f57453",
  "name": "Voucher 55",
  "description": "random vocher 77",
  "image": "",
  "price": 76,
  "quantity": 3,
  "variant": "club"
}
<!-- Бронирование ваучера -->