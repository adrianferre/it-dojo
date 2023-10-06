import { faker } from "@faker-js/faker";

const USERS_COUNT = 15;

const createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    image: "https://avatars.githubusercontent.com/u/74114292", //faker.image.avatar(),
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

export const MOCK_USERS = faker.helpers.multiple(createRandomUser, {
  count: USERS_COUNT,
});
