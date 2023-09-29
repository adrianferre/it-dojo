import { memo } from "react";
import { UsersListItem } from "./UserListItem";

export const UsersList = memo(({ users, onUserDetailOpen }) => {
  console.log("Render UsersList");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {users.map((user) => (
        <UsersListItem
          key={user.id}
          user={user}
          onUserDetailOpen={onUserDetailOpen}
        />
      ))}
    </div>
  );
});
