import "./index.css";

export function FilterCard(props) {
  return (
    <div
      className={
        props.currentTab === props.card.name
          ? "wrap-card selected"
          : "wrap-card"
      }
      onClick={() => props.openTab(props.card.name)}>
      <div
        style={{
          borderColor:
            props.currentTab === props.card.name ? "#4F372F" : "#fff",
          borderRadius: "50%",
          borderStyle: "solid",
          borderWidth: "2px",
        }}>
        <div className="circle">
          <img src={props.card.images[0].image} />
        </div>
      </div>
      <p>{props.card.name}</p>
    </div>
  );
}

export default FilterCard;
