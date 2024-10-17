import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching user data from the server
    fetch("http://localhost:3001/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Foydalanuvchilar </h1>
        {/* Display user data */}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <p>Name: {user.name}</p>

                {/* Add more fields as per your user data structure */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </header>
    </div>
  );
}

export default App;
