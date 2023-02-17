<!-- eslint-disable max-len -->
<template>
  <div class="q-pa-md">
    <div class="q-pa-md q-gutter-sm row justify-center">
      <q-btn align="center" class="btn-fixed-width" color="cyan-8" label="Discovery" icon="travel_explore" />
      <q-btn align="right" class="btn-fixed-width" color="cyan-8" label="Restaurants" icon="restaurant" />
      <q-btn align="between" class="btn-fixed-width" color="cyan-8" label="Stores" icon="store" />
    </div>
    <div class="q-gutter-md row">
      <h4><b>Stores near me:</b></h4>
      <q-space />
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Filter" color="cyan-8" @click="alert" icon="filter_alt" />
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-6 col-md-4" v-for="deal in deals" :key="deal.store">
        <cardDeal :store="deal.store" :message="deal.message"></cardDeal>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import cardDeal from 'components/cardDeal.vue';
import { useQuasar } from 'quasar';

export default {
  name: 'DealsPage',
  components: {
    cardDeal,
  },
  data: () => ({
    deals: [],
  }),
  methods: {

  },
  mounted() {
    axios.get('http://localhost:3000/deals/all').then((response) => {
      this.deals = response.data;
    });
    // console.log(this.deals);
  },
  setup() {
    const $q = useQuasar();

    function alert() {
      $q.dialog({
        title: 'Alert',
        message: 'Some message',
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
    }

    return { alert };
  },
};

</script>

<style lang="sass" scoped>

</style>
