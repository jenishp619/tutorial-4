
import './App.css';
import ProfileDetails from "./Pages/ProfileDetails";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route path = "/" element={<Login />}></Route>
        <Route path = "profile">
          <Route path = ":id" element={<ProfileDetails />}></Route>
          <Route index element = {<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </div>
  </Router>
);

  }

export default App;
