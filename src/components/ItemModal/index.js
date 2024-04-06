import { useState } from "react";
import noItem from "../../assets/no-product-image.webp";
import "./index.css";
import { formatModifiedItem } from "../../utils/utils";
import { formatMoney } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { changeBasket } from "../../store/reducers/basket";

export function ItemModal(props) {
  const dispatch = useDispatch();
  const [addedIten, setAddedItem] = useState(formatModifiedItem(props.card));
  const [totalToAdd, setTotalToAdd] = useState(formatModifiedItem(0));

  const addItem = (item) => {
    setAddedItem(item);
  };

  const handleModifier = (item) => {
    const selectedItem = {
      ...addedIten,
      extra: item.name ?? "",
      price: item.price ?? addItem.price,
      modifyId: item.id ?? 0,
      amount: totalToAdd,
    };
    addItem(selectedItem);
  };

  const changeAmount = (amount) => {
    const handleAmount = totalToAdd + amount;
    setTotalToAdd(handleAmount);
    addItem({ ...addedIten, amount: handleAmount });
  };

  const addToBasket = () => {
    const basketItem = hasItem();
    if (basketItem) {
      const changedItem = {
        ...addedIten,
        amount: basketItem.amount + totalToAdd,
      };
      dispatch(changeBasket(changedItem));
    } else {
      dispatch(changeBasket(addedIten));
    }

    props.onCloseItem();
  };

  const hasItem = () => {
    return props.basket.find((product) => product.id === addedIten.id);
  };

  return (
    <div className="mask">
      <div className="wrap-item-modal">
        <div className="product-image">
          <img
            src={props.card.images ? props.card.images[0].image : noItem}
            style={{ objectFit: props.card.images ? "" : "scale-down" }}
          />
          <button
            className="close-modal-item"
            onClick={(e) => props.onCloseItem()}></button>
        </div>
        <div className="product-desc">
          <h1>{props.card.name}</h1>
          <p>{props.card.description}</p>
        </div>
        {props.card.modifiers?.map((modifier, index) => (
          <div className="product-options" key={index}>
            <div className="choose">
              <span className="title">{modifier.name}</span>
              <span>Select 1 option</span>
            </div>
            <div className="modifier-wrapper">
              <ul>
                {modifier.items?.map((item, index) => (
                  <li key={index} className="modifier-item">
                    <div className="modifier-desc">
                      <span className="modifier-title">{item.name}</span>
                      <span>
                        {props.currencySymbol}&nbsp;{item.price},00
                      </span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="item"
                        checked={item.id === addedIten.modifyId}
                        value={item.id}
                        onChange={() => handleModifier(item)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="product-amount">
          <div className="wrap-buttons">
            <button
              className="remove-item"
              disabled={totalToAdd <= 0}
              onClick={() => changeAmount(-1)}></button>
            <span className="amount">{totalToAdd}</span>
            <button
              className="add-item"
              onClick={() => changeAmount(1)}></button>
          </div>
          <div className="wrap-button">
            <button
              type="button"
              className="action-button"
              disabled={totalToAdd <= 0}
              onClick={() => addToBasket()}>
              Add to Order • {props.currencySymbol}&nbsp;
              {addedIten?.price
                ? formatMoney(addedIten.price * totalToAdd)
                : formatMoney(0)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
