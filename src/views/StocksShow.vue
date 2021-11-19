<template>
  <div class="stocks-show">
    <h4>Symbol: {{ stock.symbol }}</h4>
    <p>Company Name: {{ stock.company_name }}</p>
    <p>Cost Basis: {{ stock.cost_basis }}</p>
    <p>Current Price: {{ stock.current_price }}</p>
    <p>Quantity: {{ stock.quantity }}</p>
    <button v-on:click="destroyStock()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      stock: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/stocks/" + this.$route.params.id).then((response) => {
      this.stock = response.data;
      console.log("Success", response.data);
    });
  },
  methods: {
    destroyStock: function () {
      axios.delete("http://localhost:3000/stocks/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/stocks");
      });
    },
  },
};
</script>
