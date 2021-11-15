import { uiAction } from "./ui-slice";
import { cartSliceAction } from "./cart-slice";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiAction.setNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    setTimeout(() => {
      async function callingAPI() {
        const apiCall = await fetch(
          "https://react-http-54e26-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cartData),
          }
        );
        console.log("Here response->", apiCall);
        if (!apiCall.ok) {
          dispatch(
            uiAction.setNotification({
              status: "error",
              title: "Error",
              message: "Sending cart data",
            })
          );
          throw new Error("Sending cart data failed");
        }

        console.log("Here we getapi data-->", apiCall);
      }
      callingAPI();

      dispatch(
        uiAction.setNotification({
          status: "success",
          title: "Success",
          message: "Send cart data success",
        })
      );
    }, 600);
  };
};

export const fetchCardData = (cartData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-54e26-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
      const data = response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartSliceAction.replaceCart(cartData));
    } catch (error) {
      console.log("Some error occured");
    }
  };
};
