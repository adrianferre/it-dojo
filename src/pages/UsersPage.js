import { useEffect, useMemo, useState, memo, useCallback } from "react";
import { MOCK_USERS } from "../mockUsers";

import { UsersList } from "../components/UsersList";
import { UserInput } from "../components/UserInput";
import { UserDetail } from "../components/UserDetail";

import { useDebounce, useAsync } from "react-use";

import { getUsers } from "../apiClient";

const stylesMain = {
  padding: 12,
};

export const UsersPage = memo(() => {
  const [text, setText] = useState("");
  const [userDetail, setUserDetail] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { loading, value, error } = useAsync(async () => {
    const users = await getUsers();

    return users.map(({ _id, data }) => ({
      _id,
      ...data,
    }));
  }, []);

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
    console.log("user", user);
    setUserDetail(user);
  }, []);

  return (
    <main style={stylesMain}>
      <h2>Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error...CTA</p>
      ) : (
        <>
          <UserInput text={text} onTextChange={handleTextChange} />
          <UsersList
            users={filteredUsers}
            onUserDetailOpen={handleUserDetailOpen}
          />
          {userDetail ? <UserDetail user={userDetail} /> : null}
        </>
      )}
    </main>
  );
});
