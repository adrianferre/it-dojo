import { MOCK_USERS } from "./mockUsers";
import { createUser } from "./apiClient";

export async function createUsersScript() {
  await MOCK_USERS.map(createUser);
  console.log("Users created");
}
