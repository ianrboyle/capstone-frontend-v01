<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    const sectors = this.chartData.map((d) => d.sectors);
    const percentages = this.chartData.map((d) => d.percentages);

    this.renderChart(
      {
        labels: sectors,
        datasets: [
          {
            label: this.label,
            data: percentages,
          },
        ],
      },
      this.options
    );
  },
};
</script>
