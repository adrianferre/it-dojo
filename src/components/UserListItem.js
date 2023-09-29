import { memo } from "react";

// {
//     "id": "f8a89a18-6cd8-4bd2-b150-bc768b151083",
//     "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/723.jpg",
//     "userName": "Catalina59",
//     "rating": 4,
//     "phoneNumber": "(320) 354-7606 x70276",
//     "location": {
//       "country": "Bahamas",
//       "city": "Mrazberg"
//     },
//     "updatedAt": "Thu Mar 21 2024 02:48:29 GMT-0300 (Argentina Standard Time)",
//     "createdAt": "Mon Dec 18 2023 08:45:12 GMT-0300 (Argentina Standard Time)"
//   }

export const UsersListItem = memo(({ user, onUserDetailOpen }) => {
  return (
    <div
      className="user-item"
      style={{
        display: "flex",
        alignItems: "center",
        padding: 8,
        gap: 8,
        maxWidth: 500,
        cursor: "pointer",
      }}
      onClick={() => onUserDetailOpen(user)}
    >
      <img
        src={user.image}
        style={{
          height: 50,
          width: 50,
        }}
      />
      <div>
        <div>{user.userName}</div>
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
