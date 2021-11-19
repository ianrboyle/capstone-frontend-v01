<template>
  <div class="login">
    <form v-on:submit.prevent="createStock()">
      <h1>{{ message }}</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Symbol:</label>
        <input type="text" v-model="newStockParams.symbol" />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" v-model="newStockParams.company_name" />
      </div>
      <div>
        <label>Cost Basis:</label>
        <input type="text" v-model="newStockParams.cost_basis" />
      </div>
      <div>
        <label>Current Price:</label>
        <input type="text" v-model="newStockParams.current_price" />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="text" v-model="newStockParams.quantity" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Add a company to your portfolio:",
      newStockParams: {},
      errors: [],
    };
  },
  methods: {
    createStock: function () {
      console.log("Creating a new stock");
      axios
        .post("http://localhost:3000/stocks", this.newStockParams)
        .then(() => {
          this.$router.push("/stocks");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
