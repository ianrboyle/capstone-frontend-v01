import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Chart from "../node_modules/chart.js/dist/chart.min.js";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

new Chart(document.getElementById("my-chart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "2018 Sales",
        data: [300, 700, 450, 750, 450],
      },
    ],
  },
});
