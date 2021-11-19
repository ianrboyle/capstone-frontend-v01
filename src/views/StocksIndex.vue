<template>
  <div>
    <h1>{{ message }}</h1>
    <div v-for="stock in stocks" :key="stock.id">
      <h4>Symbol: {{ stock.symbol }}</h4>
      <p>Company Name: {{ stock.company_name }}</p>
      <p>Cost Basis: {{ stock.cost_basis }}</p>
      <p>Current Price: {{ stock.current_price }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Your Stocks:",
      stocks: [],
    };
  },
  created: function () {
    this.indexStocks();
  },
  methods: {
    indexStocks: function () {
      axios.get("http://localhost:3000/stocks").then((response) => {
        this.stocks = response.data;
        console.log("Success! Stocks data:", response.data);
      });
    },
  },
};
</script>
