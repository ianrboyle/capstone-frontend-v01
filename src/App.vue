<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/about">About</a>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <a class="nav-link active" aria-current="page" href="/stocks">My Stocks</a>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <a class="nav-link active" aria-current="page" href="/stocks/new">Add New Stock</a>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/signup">Signup</a>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/logout">Logout</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li> -->
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="row-mt-5" v-if="sectors.length > 0">
      <h2>Sectors</h2>
      <line-chart :chartData="sectors" :options="chartOptions" label="Sectors"></line-chart>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from "axios";
import LineChart from "./components/LineChart.vue";
export default {
  components: {
    LineChart,
  },
  data: function () {
    return {
      logInMessage: "",
      message: "",
      titleFilter: "",
      sectors: [],
      percentAccount: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  async created() {
    const { data } = await axios.get("http://localhost:3000/sectors");
    data.forEach((element) => {
      const sector = element.sector;
      this.sectors.push(sector);
      const percentage = element.sector_percent_of_account;
      this.percentAccount.push(percentage);
    });
    console.log(this.sectors, this.percentAccount);
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
