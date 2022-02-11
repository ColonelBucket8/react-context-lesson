import React, { useContext } from "react";

import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.provider";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleCartHidden } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
