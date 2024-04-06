import "./index.css";
import { formatMoney } from "../../utils/utils";
import { useSelector } from "react-redux";

export function ProductCard(props) {
  const searchWord = useSelector((state) => {
    return state.search;
  });
  return (
    <div>
      {props?.products
        ?.filter((product) => {
          if (searchWord.length > 0) {
            return product.name.toLowerCase().includes(searchWord);
          }
          return product;
        })
        .map((product, index) => (
          <div
            key={index}
            className="card-content"
            onClick={(e) => props.onSelectItem(product)}>
            <div className="card-descripton">
              <span className="product-name">
                {props.basket.some((item) => item.id === product.id) ? (
                  <span className="at-cart">1</span>
                ) : (
                  ""
                )}

                {product.name}
              </span>
              <span className="product-description">{product.description}</span>
              <span className="product-price">
                {props.currencySymbol}&nbsp;
                {product.modifiers
                  ? formatMoney(product.modifiers[0].items[0].price)
                  : formatMoney(product.price)}
              </span>
            </div>
            <div className="product-image">
              {product.images && <img src={product.images[0].image} />}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
