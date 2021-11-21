<template>
  <div class="stocks-index">
    <h1>{{ message }}</h1>
    <div class="container headers">
      <div class="row">
        <div class="col-sm">Symbol</div>
        <div class="col-sm">Current Price</div>
        <div class="col-sm">Quantity</div>
        <div class="col-sm">Cost Basis</div>
        <div class="col-sm">Current Total Value</div>
        <div class="col-sm">Percent of Account</div>
        <div class="col-sm">Total Gain / Loss</div>
        <div class="col-sm">Sector</div>
        <div class="col-sm">Industry</div>
      </div>
    </div>
    <div class="container">
      <div v-for="stock in stocks" :key="stock.id">
        <div class="row">
          <div class="col-sm">
            {{ stock.symbol }}
            |
            <router-link v-bind:to="`/stocks/${stock.id}`">
              <button type="button" class="btn btn-outline-primary">Info</button>
            </router-link>
          </div>
          <div class="col-sm">${{ stock.current_price }}</div>
          <div class="col-sm">{{ stock.quantity }}</div>
          <div class="col-sm">${{ stock.cost_basis }}</div>
          <div class="col-sm">${{ stock.current_total_value }}</div>
          <div class="col-sm">{{ stock.percent_of_account }}%</div>
          <div class="col-sm">${{ stock.total_gain_loss }}</div>
          <div class="col-sm">{{ stock.sector.sector }}</div>
          <div class="col-sm">{{ stock.industry.industry }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.col-sm {
  background-color: lightgreen;
  border-style: solid;
}
.headers {
  font-weight: bold;
}
</style>
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
