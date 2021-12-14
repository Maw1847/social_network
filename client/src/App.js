import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/accueil/Home";
import Initial from "./pages/init/Initial";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import Profil from "./pages/profil/Profil";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Initial />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login">{user ? <Redirect to="/home" /> : <Login />}</Route>
        <Route path="/register">
           <Register />
        </Route>
        <Route path="/profile/:username">
          <Profil />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
