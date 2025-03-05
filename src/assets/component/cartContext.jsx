import React, { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("ProductCart");
  return localCartData ? JSON.parse(localCartData) : [];
};

const initialState = {
  cartItems: getLocalCartData(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      }

    case "removeFromCart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "increaseQuantity":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "decreaseQuantity":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("ProductCart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
