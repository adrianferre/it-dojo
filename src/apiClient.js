import axios from "axios";

const instance = axios.create({
  baseURL: "https://crudcrud.com/api/86da6dd89f124d4d936e192f4b265e19",
  headers: {
    "Content-Type": "application/json",
  },
});

export function createUser(user) {
  instance
    .post("users", {
      data: user,
    })
    .then((res) => {
      console.log(res.data);
    });
}

export async function getUsers() {
  return instance.get("users").then((res) => res.data);
}
