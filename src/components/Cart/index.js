import "./index.css";
import { formatMoney, sumTotal } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { changeBasket } from "../../store/reducers/basket";

export function Cart(props) {
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
    <div className="cart">
      <>
        <div className="cart-header">
          <div></div>
          <h3>Cart</h3>
        </div>
      </>
      {props.basket && props.basket.length > 0 ? (
        <div className="flex-wrap">
          <div>
            <ul className="cart-items">
              {props.basket?.map((item, index) => (
                <li className="cart-item" key={index}>
                  <div className="cart-detail-item">
                    <span className="item-name">{item.name}</span>
                    {item.extra && (
                      <span className="aditional">{item.extra}</span>
                    )}

                    <div className="wrap-buttons-cart">
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
              <div className="cart-wrap">
                <button
                  type="button"
                  className="action-button"
                  onClick={() => props.finishOrder()}>
                  <span>Checkout now</span>
                </button>
              </div>
            </>
          </div>
        </div>
      ) : (
        <div className="empty-cart">Empty cart</div>
      )}
    </div>
  );
}

export default Cart;
