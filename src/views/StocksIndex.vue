<template>
  <div class="stocks-index">
    <h1>{{ message }}</h1>
    <table>
      <tr>
        <th>Symbol</th>
        <th>Current Price</th>
        <th>Quantity</th>
        <th>Info</th>
      </tr>
      <div v-for="stock in stocks" :key="stock.id">
        <tr>
          <td>{{ stock.symbol }}</td>
          <td>{{ stock.current_price }}</td>
          <td>{{ stock.quantity }}</td>
          <td>
            <router-link v-bind:to="`stocks/${stock.id}`">
              <button type="button" class="btn btn-primary">More Info</button>
            </router-link>
          </td>
        </tr>

        <!-- <h4>Symbol: {{ stock.symbol }}</h4>
      <p>Current Price: {{ stock.current_price }}</p>
      <p>Quantity: {{ stock.quantity }}</p> -->
      </div>
    </table>
  </div>
</template>
<style>
table,
th,
td {
  border: 1px solid black;
}
table.center {
  margin-left: auto;
  margin-right: auto;
}
th,
td {
  padding: 10px;
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
