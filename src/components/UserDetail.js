import { memo, useState, useCallback, useEffect } from "react";
import { updateUser } from "../apiClient";
import { useUpdateEffect } from "react-use";

export const UserDetail = memo(({ user, onUserDetailUpdate }) => {
  const [userDetail, setUserDetail] = useState({
    ...user,
  });

  const handleUserReset = useCallback(
    () =>
      setUserDetail({
        ...user,
      }),
    [user]
  );

  useUpdateEffect(() => {
    handleUserReset();
  }, [handleUserReset]);

  const handleNameChange = useCallback((userName) => {
    setUserDetail((userDetail) => ({
      ...userDetail,
      userName: userName,
    }));
  }, []);

  console.log("userDetail", userDetail);

  return (
    <div
      style={{
        display: "flex",
        padding: 8,
        gap: 8,
        maxWidth: 500,
        height: 50,
      }}
    >
      <img
        src={user.image}
        style={{
          height: 50,
          width: 50,
        }}
      />
      <div>
        <input
          value={userDetail.userName}
          onChange={(event) => handleNameChange(event.target.value)}
        />
        <div
          style={{
            color: "grey",
          }}
        >
          {user.phoneNumber}
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        {user.rating}
      </div>
      <button onClick={() => onUserDetailUpdate(userDetail)}>Save</button>
      <button onClick={handleUserReset}>Reset</button>
    </div>
  );
});
