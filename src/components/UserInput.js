import { memo } from "react";

export const UserInput = memo(({ text, onTextChange }) => {
  console.log("Render UsersInput");
  return (
    <input
      value={text}
      onChange={(event) => onTextChange(event.target.value)}
    />
  );
});
