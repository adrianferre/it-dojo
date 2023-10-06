import axios from "axios";

const instance = axios.create({
  baseURL: "https://crudcrud.com/api/2095180a18474af7b65fa41fd5c6ab9c",
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
