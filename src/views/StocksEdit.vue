<template>
  <div class="stocks-edit">
    <form v-on:submit.prevent="updateStock()">
      <h1>{{ message }}</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Symbol:</label>
        <input type="text" v-model="currentStockParams.symbol" />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" v-model="currentStockParams.company_name" />
      </div>
      <div>
        <label>Cost Basis:</label>
        <input type="text" v-model="currentStockParams.cost_basis" />
      </div>
      <div>
        <label>Current Price:</label>
        <input type="text" v-model="currentStockParams.current_price" />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="text" v-model="currentStockParams.quantity" />
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
      message: "Update your portfolio:",
      currentStockParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`http://localhost:3000/stocks/${this.$route.params.id}`).then((response) => {
      console.log("My Stock: ", response.data);
      this.currentStockParams = response.data;
    });
  },
  methods: {
    updateStock: function () {
      console.log("Creating a new stock");
      axios
        .put(`http://localhost:3000/stocks/${this.$route.params.id}`, this.currentStockParams)
        .then((response) => {
          this.currentStockParams = response.data;
          this.$router.push(`/stocks/${this.$route.params.id}`);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
