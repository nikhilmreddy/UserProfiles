import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState(null);
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <Routes>
        <Route exact path="/" element={<Home change={(uid)=>setUserId(uid)} />}></Route>
        <Route exact path="/Todo" element={<Todo />}></Route>
        <Route exact path="/contact-us" element={<ContactUs />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path={`/posts/${userId}`} element={<Posts usid={userId}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
