import logo from "./logo.svg";
import "./App.css";
//Cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/HomePage/Header";

import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <UserLoginTemplate exact path="/login" Component={Login} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
