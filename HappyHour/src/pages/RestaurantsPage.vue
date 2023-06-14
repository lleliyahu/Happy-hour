<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="q-pa-md gt-sm">
      <div class="q-pa-md q-gutter-sm row justify-center">
        <!-- <q-btn align="center" class="btn-fixed-width" color="cyan-8" label="Explore" icon="travel_explore" /> -->
        <q-btn to="/Restaurants" align="right" class="btn-fixed-width" color="cyan-8" label="Restaurants"
          icon="restaurant" />
        <q-btn to="/Stores" align="between" class="btn-fixed-width" color="cyan-8" label="Stores" icon="store" />
        <q-btn to="/DealBreaker" align="between" class="btn-fixed-width" color="red-6" label="Deal Breaker"
          icon="local_fire_department" />
      </div>
    </div>
    <div class="q-gutter-md row">
      <h4><b>Restaurants near me:</b></h4>
      <q-space />
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Filter" color="blue-grey-8" icon="filter_alt" @click="filterdialog = true" />
        <q-dialog v-model="filterdialog">
          <restaurantFilter></restaurantFilter>
        </q-dialog>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row q-col-gutter-sm">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="deal in deals" :key="deal.store">
          <cardDeal :store="deal.storename" :message="deal.message"></cardDeal>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import cardDeal from 'components/cardDeal.vue';
import restaurantFilter from 'src/components/RestaurantFilter.vue';

export default {
  name: 'DealsPage',
  components: {
    cardDeal,
    restaurantFilter,
  },
  data: () => ({
    deals: [],
  }),
  methods: {

  },
  mounted() {
    const params = {};
    params.storetype = 'Resturant';

    axios.get('http://localhost:3000/store/getallStore', { params: { params } }).then((response) => {
      this.deals = response.data;
    });
    // console.log(this.deals);
  },
  setup() {
    return {
      filterdialog: ref(false),
    };
  },
};

</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
