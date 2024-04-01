import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cart = JSON.parse(String(getCookie("cart") ?? "{}"));
    return cart;
  }
  return {};
};

export const addProductToCart = (id: string) => {
  const cart = getCookieCart();
  cart[id] = (cart[id] ?? 0) + 1;
  setCookie("cart", JSON.stringify(cart));
};

//function for remove product cart
export const removeProductFromCart = (id: string) => {
  const cart = getCookieCart();
  delete cart[id];
  setCookie("cart", JSON.stringify(cart));
};

//function for remove sigle item from cart
export const removeSingleItemFromCart = (id: string) => {
  const cart = getCookieCart();
  cart[id] = (cart[id] ?? 0) - 1;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  setCookie("cart", JSON.stringify(cart));
};
