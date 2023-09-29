import { memo, useState, useCallback } from "react";

export const UserDetail = memo(({ user }) => {
  const [userDetail, setUserDetail] = useState({
    ...user,
  });

  const handleNameChange = useCallback((name) => {
    setUserDetail((userDetail) => ({
      ...userDetail,
      name: name,
    }));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: 8,
        gap: 8,
        maxWidth: 500,
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
          value={userDetail.name}
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
    </div>
  );
});
