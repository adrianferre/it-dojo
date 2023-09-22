import { useEffect, useMemo, useState, memo, useCallback } from "react";
import { MOCK_USERS } from "../mockUsers";

import { UsersList } from "../components/UsersList";
import { UserInput } from "../components/UserInput";

import { useDebounce } from "react-use";

const stylesMain = {
  padding: 12,
};

export const UsersPage = memo(() => {
  const [text, setText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(MOCK_USERS);

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
      console.log("Filter by text", text);
      setFilteredUsers(
        MOCK_USERS.filter(({ userName }) => userName.includes(text))
      );
    },
    300,
    [text]
  );

  console.log("UsersPage", text);

  const handleTextChange = useCallback((text) => {
    setText(text);
  }, []);

  return (
    <main style={stylesMain}>
      <h2>Users</h2>
      <UserInput text={text} onTextChange={handleTextChange} />
      <UsersList users={filteredUsers} />
    </main>
  );
});
