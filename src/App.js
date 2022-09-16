import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <>
          {/* <h1>login</h1> */}
          <Login />
        </>
      ) : (
        <>
          <h1>dddddddddd</h1>
          <div className="app-body">
            <Router>
              <Sidebar />
              <Routes>
                <Route
                  path="/room/:roomId"
                  element={
                    <>
                      <Chat />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <Chat />
                    </>
                  }
                />

                <Route path="/" element={<h1>Home</h1>} />
                <Route
                  path="*"
                  element={
                    <div>
                      <h2>404 Page not found etc</h2>
                    </div>
                  }
                />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
