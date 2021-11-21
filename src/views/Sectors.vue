<template>
  <div>
    <h1>{{ message }}</h1>
    <canvas id="my-chart" width="500" height="300"></canvas>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Sectors",
    };
  },
};
</script>
