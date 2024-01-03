import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { CreatePost } from "./pages/createpost/create-post";
import { Navbar } from "./components/navbar";
//import { Person, Country } from "./pages/Person";
//import { Home } from "./pages/Home";
//import { Contact } from "./pages/Contact";
import { Provider } from "react-redux";
//import { Person, Country } from "./pages/Person";
//import { store } from "./store";

function App() {
  //1) TypeScript and TypeSafety

  /*const getAge = (name: string): number => {
    return 18;
  };

  return (
    <div className="App">
      <Person
        name="Messi"
        email="Messi@gmail.com"
        age={36}
        friends={["John", "Johnny", "Jonnathan"]}
        country={Country.Argentina}
      />
    </div>
  );*/

  /*----------------------------------------------------------------*/

  //2) Redux Toolkit

  /*return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );*/

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
