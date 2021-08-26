import logo from "./logo.svg";
import "./App.css";
//Cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import LoginCyberBugs from "./pages/CyberBugs/LoginCyberBugs/LoginCyberBugs";

import Header from "./components/HomePage/Header";
import TodoList from "./pages/TodoList/TodoList";
import TodoListRFC from "./pages/TodoList/TodoListRFC";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />
        <Route exact path="/todolistrcc" component={TodoList} />
        <Route exact path="/todolistrfc" component={TodoListRFC} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
