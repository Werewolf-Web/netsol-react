import { useState } from "react";
import Login from "./login/Login";
import Home from "./login/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <>
   
        
  
         {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    
    </>
  );
}

export default App;
