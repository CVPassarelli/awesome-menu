import "./index.css";

export function BasketButton(props) {
  return (
    <>
      <input
        type="checkbox"
        name="basket"
        id="basket"
        className="basket-checkbox"
      />
      <div className="basket-wrapper">
        <label htmlFor="basket" className="action-button">
          <span>
            Your basket • {props.basket.length}{" "}
            {props.basket.length > 1 ? "items" : "item"}
          </span>
        </label>
      </div>
    </>
  );
}

export default BasketButton;
