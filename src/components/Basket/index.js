import "./index.css";
import { formatMoney, sumTotal } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { changeBasket } from "../../store/reducers/basket";

export function Basket(props) {
  const dispatch = useDispatch();
  const removeItem = (product) => {
    const itemToEdit = { ...product, amount: product.amount - 1 };
    dispatch(changeBasket(itemToEdit));
  };

  const addItem = (product) => {
    const itemToEdit = { ...product, amount: product.amount + 1 };
    dispatch(changeBasket(itemToEdit));
  };
  return (
    <div className="basket">
      <>
        <input
          type="checkbox"
          name="basket"
          id="basket"
          className="basket-checkbox"
        />
        <div className="basket-header">
          <div></div>
          <h3>Basket</h3>
          <label htmlFor="basket" className="close-basket"></label>
        </div>
      </>
      <div className="flex-wrap">
        <div>
          <ul className="basket-items">
            {props.basket?.map((item, index) => (
              <li className="basket-item" key={index}>
                <div className="basket-detail-item">
                  <span className="item-name">{item.name}</span>
                  {item.extra && (
                    <span className="aditional">{item.extra}</span>
                  )}

                  <div className="wrap-buttons-basket">
                    <button
                      className="remove-item"
                      onClick={() => removeItem(item)}></button>
                    <span className="amount-items">{item.amount}</span>
                    <button
                      className="add-item"
                      onClick={() => addItem(item)}></button>
                  </div>
                </div>
                <div className="total-item">
                  {props.currencySymbol}&nbsp;{" "}
                  {formatMoney(item.price * item.amount)}
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <div className="wrap-subtotal">
              <span>Sub total</span>
              <span>
                {props.currencySymbol}&nbsp; {sumTotal(props.basket)}
              </span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span className="final-total">
              {props.currencySymbol}&nbsp; {sumTotal(props.basket)}
            </span>
          </div>
        </div>
        <div>
          <>
            <div className="basket-wrap">
              <input
                type="checkbox"
                name="basket"
                id="basket"
                className="basket-checkbox"
              />
              <label
                htmlFor="basket"
                className="action-button"
                onClick={() => props.finishOrder()}>
                <span>Checkout now</span>
              </label>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Basket;
