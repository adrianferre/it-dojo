import { UsersPage } from "./pages/UsersPage";
// This is to create the initial data every time the page API is reset
// import { useEffect } from "react";
// import { createUsersScript } from "./createUsersScript";

function App() {
  // useEffect(() => {
  //   createUsersScript();
  // }, []);

  return (
    <main
      style={{
        padding: 12,
      }}
    >
      <h1>It dojo</h1>
      {/* Route users */}
      <UsersPage />
    </main>
  );
}

export default App;
