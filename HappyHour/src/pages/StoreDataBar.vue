<!-- eslint-disable max-len -->
<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <bar-chart></bar-chart>
      </div>
    </div>
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
