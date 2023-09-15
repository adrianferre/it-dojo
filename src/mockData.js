import { faker } from "@faker-js/faker";

const createRandomData = () => {
  return {
    id: faker.string.uuid(),
    image: faker.image.avatar(),
    userName: faker.internet.userName(),
    rating: faker.number.int({ min: 1, max: 10 }),
    phoneNumber: faker.phone.number(),
    location: {
      country: faker.location.country(),
      city: faker.location.city(),
    },
    updatedAt: faker.date.anytime().toString(),
    createdAt: faker.date.anytime().toString(),
  };
};

const data = faker.helpers.multiple(createRandomData, {
  count: 10,
});
