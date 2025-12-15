import Button from 'react-bootstrap/Button';
import { useState } from "react";
import './../../src/App.css';

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <div className="full-bg">
      <div
        className="shadow-lg bg-dark p-5 mb-5 bg-transparent mx-auto mt-5 "
        style={{
          width: "450px",
          borderRadius: "20px",
          backdropFilter: "blur(50px)"
          // backgroundColor: "rgba(206, 206, 206, 1)"
        }}
      >
        <h4
          className="text-center text-dark mb-4"
          style={{ fontWeight: 600, fontSize: "35px" }}
        >
          Login
        </h4>

        <input
          className="form-control mb-3 bg-transparent"
          style={{ height: "45px" }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="form-control mb-4 bg-transparent"
          style={{ height: "45px" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-center">
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
