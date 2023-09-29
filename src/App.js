import { UsersPage } from "./pages/UsersPage";

function App() {
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
