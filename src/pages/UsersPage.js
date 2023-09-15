import { useMemo, useState } from "react";
import { MOCK_USERS } from "../mockUsers";

import { UsersList } from "../components/UsersList";

export function UsersPage() {
  console.log("UsersPage");

  const [text, setText] = useState("");

  console.log("text", text);

  const filteredUsers = useMemo(
    () => MOCK_USERS.filter(({ userName }) => userName.includes(text)),
    [text]
  );

  return (
    <main
      style={{
        padding: 12,
      }}
    >
      <h2>Users</h2>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <UsersList users={filteredUsers} />
    </main>
  );
}
