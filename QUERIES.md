<!-- Поиск юзера -->
query ($id: ID) {
  user(id: $id) {
    id
    name
    lastname
    email
    role
  }
}

{
  "id": "5f425aa8b50cf04a30e42334"
}

<!-- Поиск квартир -->
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
Все параметры снизу необязательные
{
  "checkInDate": "15",  // равно или больше имеющихся дат заселения
  "checkOutDate": "19", // равно или меньше имеющихся дат выселения
  "price": 2,
  "numberOfRooms": 4
}

<!-- Поиск ваучеров -->
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

{
  "variant": "club",
  "quantity": 4
}