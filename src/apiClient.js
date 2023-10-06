import axios from "axios";

const instance = axios.create({
  baseURL: "https://crudcrud.com/api/2bb2caba152244848b9ec7f5f7ff7eb0",
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

export async function updateUser(user) {
  return instance
    .put(`users/${user._id}`, {
      data: user,
    })
    .then((res) => {
      console.log(res.data);
    });
}

export async function getUsers() {
  return instance.get("users").then((res) => res.data);
}
