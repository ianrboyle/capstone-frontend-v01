<template>
  <div class="stocks-show">
    <div class="card" style="width: 18rem">
      <div class="card-header">Symbol: {{ stock.symbol }}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Company Name: {{ stock.company_name }}</li>
        <li class="list-group-item">Cost Basis: {{ stock.cost_basis }}</li>
        <li class="list-group-item">Current Price: {{ stock.current_price }}</li>
        <li class="list-group-item">Quantity: {{ stock.quantity }}</li>
      </ul>
      <div>
        <router-link v-bind:to="`/stocks/${stock.id}/edit`">
          <button type="button" class="btn btn-primary">Edit</button>
        </router-link>
        |
        <router-link v-bind:to="`/stocks`">
          <button type="button" class="btn btn-success">My Stocks</button>
        </router-link>
        |
        <button class="btn btn-danger" v-on:click="destroyStock()">Delete</button>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  color: black;
}
</style>
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
