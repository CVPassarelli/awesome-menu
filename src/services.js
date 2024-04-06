const appConfigService = async () => {
  fetch("https://cdn-dev.preoday.com/challenge/venue/9")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

const appMenuService = () => {
  fetch("https://cdn-dev.preoday.com/challenge/menu").then((res) => {
    return res.json();
  });
};

export { appConfigService, appMenuService };
