<template>
<div class="q-pa-md">
  <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-6 col-md-4"  v-for="deal in deals" :key="deal.store">
         <cardDeal :store="deal.store"  :message="deal.message"></cardDeal>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import cardDeal from 'components/cardDeal.vue';

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
    console.log(this.deals);
  },
};

</script>

<style lang="sass" scoped>

</style>
