<!-- eslint-disable max-len -->
<template>
  <div>
    <q-card class="no-shadow" style="background: linear-gradient(135deg, rgb(58, 96, 115) 25%, rgb(44, 52, 60) 80%);"
      bordered>
      <q-card-section class="text-h6 text-white">
        My Store Orders Data
        <q-btn icon="fa fa-download" color="white" class="float-right" @click="SaveImage" flat dense>
          <q-tooltip>Download PNG</q-tooltip>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <ECharts ref="barchart" :option="options" class="q-mt-md" :resizable="true" autoresize style="height: 300px;" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ECharts from 'vue-echarts';
import 'echarts';

export default defineComponent({
  name: 'BarChart',
  setup() {
    return {
      options: {
        legend: {
          bottom: 10,
        },
        tooltip: {},
        dataset: {
          source: [
            ['product', 'Number of Orders'],
            ['Matcha Latte', 93.3],
            ['Milk Tea', 83.1],
            ['Cheese Cocoa', 86.4],
            ['Walnut Brownie', 75.4],
          ],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '20%',
          top: '5%',
          containLabel: true,
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
        ],
      },
    };
  },
  components: {
    ECharts,
  },
  methods: {
    SaveImage() {
      const linkSource = this.$refs.barchart.getDataURL();
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = '_self';
      downloadLink.download = 'BarChart.png';
      downloadLink.click();
    },
  },
});
</script>

<style scoped></style>
