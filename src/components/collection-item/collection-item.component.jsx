import React, { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        className="custom-button"
        onClick={() => addItem(item)}
        inverted
      >
        {" "}
        Add to cart{" "}
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
