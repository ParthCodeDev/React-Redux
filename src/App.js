import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const userAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log('App userAut-->', userAuth);
  return (
    <Fragment>
      <Header />
      {!userAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
