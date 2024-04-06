import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./App.css";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Search from "./components/Search";

import { setAppConfig } from "./store/reducers/config";
import { setMenuContent } from "./store/reducers/menu-content";
import { cleanBasket } from "./store/reducers/basket";

import FilterCard from "./components/FilterCard";
import { ProductCard } from "./components/ProductCard";
import ItemModal from "./components/ItemModal";
import BasketButton from "./components/BasketButton";
import Basket from "./components/Basket";
import AllergyDisclaimer from "./components/AllergyDisclaimer";
import FinishOrder from "./components/FinishOrder";
import Cart from "./components/Cart";

function App() {
  const [loader, setLoader] = useState(true);
  const [finish, setFinish] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [productTab, setProductTab] = useState("");
  const clientConfig = useSelector((state) => {
    return state.business;
  });
  const basketContent = useSelector((state) => {
    return state.basket;
  });

  const pageContent = useSelector((state) => {
    return state.menu;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    searchConfigs();
    menuContent();
  }, []);
  const searchConfigs = () => {
    fetch("https://cdn-dev.preoday.com/challenge/venue/9")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setAppConfig(data));
        setLoader(false);
        return data;
      });
  };

  const menuContent = () => {
    fetch("https://cdn-dev.preoday.com/challenge/menu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setMenuContent(data));
      });
  };

  const onSelectProduct = (item) => {
    setSelectedItem(item);
  };

  const onSelectTab = (tabName) => {
    const currentTabName = productTab === tabName ? "" : tabName;
    setProductTab(currentTabName);
  };

  const onClosAndClean = () => {
    dispatch(cleanBasket());
    setFinish(false);
  };

  return (
    <>
      <Header settings={clientConfig?.webSettings} />
      <Banner banner={clientConfig?.webSettings} />
      <div className="container">
        <Search />
        <div className="grid-content">
          <div className="wrap-shadow">
            <section className="filter-wrapper">
              {pageContent?.sections?.map((section, index) => (
                <FilterCard
                  card={section}
                  key={index}
                  openTab={onSelectTab}
                  currentTab={productTab}
                />
              ))}
            </section>

            <section className="items-list">
              {pageContent?.sections?.map((section, index) => (
                <details key={index} open={productTab === section.name}>
                  <summary>{section.name}</summary>
                  <ProductCard
                    products={section.items}
                    basket={basketContent}
                    currencySymbol={clientConfig.ccySymbol}
                    onSelectItem={(e) => onSelectProduct(e)}
                  />
                </details>
              ))}
            </section>

            <div className="allergy-wrapper">
              <label htmlFor="allergy">View allergy information</label>
            </div>
            <AllergyDisclaimer />
          </div>
          {!selectedItem && (
            <div>
              <BasketButton basket={basketContent} />
              <Basket
                currencySymbol={clientConfig.ccySymbol}
                basket={basketContent}
                finishOrder={() => setFinish(true)}
              />
              <Cart
                currencySymbol={clientConfig.ccySymbol}
                basket={basketContent}
                finishOrder={() => setFinish(true)}
              />
            </div>
          )}
        </div>
      </div>
      {selectedItem && (
        <ItemModal
          currencySymbol={clientConfig.ccySymbol}
          card={selectedItem}
          basket={basketContent}
          onCloseItem={onSelectProduct}
        />
      )}
      {loader ? <Loader /> : ""}
      {finish ? <FinishOrder closeAndClean={onClosAndClean} /> : ""}
    </>
  );
}

export default App;
