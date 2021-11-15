import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartData.map((cartItmes) => (
          <CartItem
            item={{
              key: `cart_${cartItmes.id}`,
              id: cartItmes.id,
              title: cartItmes.title,
              quantity: cartItmes.quantity,
              total: cartItmes.totalPrice,
              price: cartItmes.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
