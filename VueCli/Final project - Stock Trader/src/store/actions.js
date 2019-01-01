import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(response => response.json())
    .then(stockData => {
      if (stockData) {
        const stocks = stockData.stocks;
        const funds = stockData.funds;
        const stocksPortfolio = stockData.stocksPortfolio;
        const portfolio = {
          stocksPortfolio,
          funds
        };
        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    })
    .catch(error => console.log(error));
};
