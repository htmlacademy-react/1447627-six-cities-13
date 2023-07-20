const places = [
  {
    id: window.crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
  },
  {
    id: window.crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    previewImage: 'img/room.jpg',
    city: {
      name: 'Amsterdam',
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.7,
  },
  {
    id: window.crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    city: {
      name: 'Cologne',
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
  },
  {
    id: window.crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Paris',
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
  },
];

export default places;
