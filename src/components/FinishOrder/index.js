import "./index.css";

export function FinishOrder(props) {
  return (
    <div
      className="mask
  ">
      <div className="wrap-order">
        <h1>;D</h1>
        <p>Thanks so much for the opportunity, I hope you enjoyed my App. </p>
        <button
          type="button"
          onClick={() => props.closeAndClean()}
          className="action-button">
          Back to app
        </button>
      </div>
    </div>
  );
}

export default FinishOrder;
