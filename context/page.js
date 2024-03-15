"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function handleAddtocart(getCurrentItem) {
    let copyCartItems = [...cartItems];
    copyCartItems.push(getCurrentItem); // Add the new item directly
    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
  }
  const [wishItems, setWishItems] = useState([]);

  function handleAddtoWishlist(getCurrentItem) {
    let copyWishItems = [...wishItems];
    copyWishItems.push(getCurrentItem); // Add the new item directly
    setWishItems(copyWishItems);
    localStorage.setItem("wishItems", JSON.stringify(copyWishItems));
  }
  function removeFromCart(getCurrentName) {
    console.log(getCurrentName);
    let copyCartItems = [...cartItems];
    copyCartItems = copyCartItems.filter(
      (item) => item.name !== getCurrentName
    );
    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
  }

  function removeFromWish(getCurrentName) {
    console.log(getCurrentName);
    let copyWishItems = [...wishItems];
    copyWishItems = copyWishItems.filter(
      (item) => item.name !== getCurrentName
    );
    setWishItems(copyWishItems);
    localStorage.setItem("wishItems", JSON.stringify(copyWishItems));
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  useEffect(() => {
    setWishItems(JSON.parse(localStorage.getItem("wishItems")) || []);
  }, []);
  return (
    <Context.Provider
      value={{
        cartItems,
        wishItems,
        handleAddtocart,
        removeFromCart,
        removeFromWish,
        setCartItems,
        handleAddtoWishlist,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default GlobalState;
