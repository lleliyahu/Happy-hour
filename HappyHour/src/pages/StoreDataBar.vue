<!-- eslint-disable max-len -->
<template>
  <q-page class="q-pa-sm">
    <h2>My Store Data</h2>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <bar-chart></bar-chart>
      </div>
    </div>
    <div>Total number of orders:</div>
    <div>Total sales:</div>
    <div>Number of deals:</div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'ChartsBar',
  components: {
    BarChart: defineAsyncComponent(() => import('components/BarChart.vue')),
  },
});
</script>

<style scoped></style>
