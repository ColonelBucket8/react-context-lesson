import React, { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartIconContainer className="cart-icon">
      <ShoppingIconContainer className="shopping-icon" onClick={toggleHidden} />
      <ItemCountContainer className="item-count">
        {cartItemsCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
