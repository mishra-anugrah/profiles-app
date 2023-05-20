import { USERS_ENDPOINTS } from "./endpoints";

export const getUsers = async () => {
  return fetch(USERS_ENDPOINTS).then(
    (response) => {
      const users = response.json();
      return Promise.resolve(users);
    },
    (error) => Promise.reject(`Error : ${error}`)
  );
};
