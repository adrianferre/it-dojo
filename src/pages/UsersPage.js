import { useEffect, useMemo, useState, memo, useCallback } from "react";
import { MOCK_USERS } from "../mockUsers";

import { UsersList } from "../components/UsersList";
import { UserInput } from "../components/UserInput";
import { UserDetail } from "../components/UserDetail";

import { useDebounce, useAsyncFn } from "react-use";

import { getUsers, updateUser } from "../apiClient";

const stylesMain = {
  padding: 12,
};

export const UsersPage = memo(() => {
  const [text, setText] = useState("");
  const [userDetail, setUserDetail] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [{ loading, value, error }, doFetch] = useAsyncFn(async () => {
    const users = await getUsers();

    return users.map(({ _id, data }) => ({
      _id,
      ...data,
    }));
  }, []);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  console.log("state", loading, value, error);

  // const filteredUsers = useMemo(
  //   () => MOCK_USERS.filter(({ userName }) => userName.includes(text)),
  //   [text]
  // );

  // useEffect(() => {
  //   setFilteredUsers(
  //     MOCK_USERS.filter(({ userName }) => userName.includes(text))
  //   );
  // }, [text]);

  useDebounce(
    () => {
      setFilteredUsers(
        value?.filter(({ userName }) =>
          userName.toUpperCase().includes(text.toUpperCase())
        ) ?? []
      );
    },
    300,
    [value, text]
  );

  console.log("UsersPage", text);

  const handleTextChange = useCallback((text) => {
    setText(text);
  }, []);

  const handleUserDetailOpen = useCallback((user) => {
    console.log("User detail open", user);
    setUserDetail(user);
  }, []);

  const handleUserDetailUpdate = useCallback(
    async (user) => {
      console.log("Update user", user);
      await updateUser(user);
      doFetch();
    },
    [doFetch]
  );

  return (
    <main style={stylesMain}>
      <h2>Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error...CTA</p>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <UserInput text={text} onTextChange={handleTextChange} />
            <UsersList
              users={filteredUsers}
              onUserDetailOpen={handleUserDetailOpen}
            />
          </div>
          {userDetail ? (
            <UserDetail
              user={userDetail}
              onUserDetailUpdate={handleUserDetailUpdate}
            />
          ) : null}
        </div>
      )}
    </main>
  );
});
