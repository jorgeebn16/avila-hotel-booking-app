import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";
import StripeCallback from "./stripe/StripeCallback";
import EditHotel from "./hotels/EditHotel";
import ViewHotel from "./hotels/ViewHotel";
import StripeSuccess from "./stripe/StripeSuccess";
import StripeCancel from "./stripe/StripeCancel";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-right"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/dashboard/seller" component={DashboardSeller} />
          <PrivateRoute exact path="/hotels/new" component={NewHotel} />
          <PrivateRoute exact path="/stripe/callback" component={StripeCallback} />
          <PrivateRoute exact path="/hotel/edit/:hotelId" component={EditHotel} />
          <Route exact path="/hotel/:hotelId" component={ViewHotel} />
          <PrivateRoute exact path="/stripe/success/:hotelId" component={StripeSuccess} />
          <PrivateRoute exact path="/stripe/cancel" component={StripeCancel} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
