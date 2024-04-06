export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const formatModifiedItem = (item) => {
  if (item.modifiers && item.modifiers.length > 0) {
    const initialValue = {
      ...item,
      extra: item.modifiers[0].items[0].name,
      price: item.modifiers[0].items[0].price,
      modifyId: item.modifiers[0].items[0].id,
    };
    return initialValue;
  }
  return item;
};

export const formatMoney = (valueToFormat) => {
  const formatedValue = valueToFormat.toFixed(2).replace(/\./g, ",");
  return formatedValue;
};

export const sumTotal = (valuesToSum) => {
  if (valuesToSum.length === 0) {
    return 0;
  }
  const prices = valuesToSum.map((value) => value.price * value.amount);
  return formatMoney(prices.reduce((acc, value) => (acc += value)));
};

export const debounce = (fn) => {
  console.log("here");
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, 2000);
  };
};
