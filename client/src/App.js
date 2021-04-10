import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import TopNav from "./components/TopNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-right"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
