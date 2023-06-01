<!-- eslint-disable max-len -->
<template>
  <q-page class="q-pa-sm">
    <h2>My Store Data</h2>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <bar-chart :storename=storeName ></bar-chart>
      </div>
    </div>
    <div>Total number of orders:</div>
    <div>Total sales:</div>
    <div>Number of deals:</div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ChartsBar',
  props: ['storeName'],
  components: {
    BarChart: defineAsyncComponent(() => import('components/BarChart.vue')),
  },
  data: () => ({
    bar_data: [
      // ['product', 'Number of Orders'],
      // ['Matcha Latte', 93.3],
      // ['Milk Tea', 200.1],
      // ['Cheese Cocoa', 86.4],
      // ['Walnut Brownie', 75.4],
    ],
  }),
  methods: {
    get_data() {
      const body = {};
      body.username = localStorage.getItem('user');
      body.storename = this.storeName;
      console.log('bodydddddd', body);
      axios.post('http://localhost:3000/store/getStoreData', body).then((response) => {
        console.log('ddddddddddd', response.data[0].menu);
        if (response.data[0].menu === undefined) {
          this.bar_data = [];
        } else {
          // this.bar_data = response.data[0].menu;
          this.bar_data = [
            ['product', 'Number of Orders'],
            ['Matcha Latte', 93.3],
            ['Milk Tea', 100000.1],
            ['Cheese Cocoa', 86.4],
            ['Walnut Brownie', 75.4],
          ];
        }
      });
    },
  },
  mounted() {
    this.get_data();
  },
  setup() {
    return {

    };
  },
});
</script>

<style scoped></style>
