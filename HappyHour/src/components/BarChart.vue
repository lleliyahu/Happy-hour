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
import axios from 'axios';

export default defineComponent({
  name: 'BarChart',
  props: ['storename'],
  data: () => ({
    options: {
      legend: {
        bottom: 10,
      },
      tooltip: {},
      dataset: {
        source: [],
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
      series: [
        { type: 'bar' },
      ],
    },
  }),
  setup() {
    return {

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
    get_data() {
      const body = {};
      body.username = localStorage.getItem('user');
      body.storename = this.storename;
      axios.post('http://localhost:3000/store/getStoreData', body).then((response) => {
        let menu;
        if (response.data[0].menu === undefined) {
          this.options.dataset.source = [];
        } else {
          // this.bar_data = response.data[0].menu;
          menu = response.data[0].menu.map((x) => {
            const { name, orders } = x;
            return [name, parseInt(orders, 10)];
          });

          const source = [
            ['product', 'Number of Orders'],
          ];
          menu.forEach((element) => {
            source.push(element);
          });
          this.options.dataset.source = source;
        }
      });
    },
  },
  mounted() {
    setInterval(
      () => {
        this.get_data();
      },
      3000,
    );
  },
});
</script>

<style scoped></style>
