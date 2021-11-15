import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCardData } from "./store/cart-action";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isFirstTime = true;

function App() {
  const dispatch = useDispatch();
  const showCartCompoent = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log("Main cart Object-->", cart);

  useEffect(() => {
    dispatch(fetchCardData());
  }, []);

  useEffect(() => {
    if (isFirstTime) {
      isFirstTime = false;
      return;
    }

    if (cart.chaged) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);

  return (
    <Fragment>
      <Layout>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {showCartCompoent && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
