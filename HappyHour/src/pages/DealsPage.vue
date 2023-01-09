<template>
<div class="q-pa-md">
<div class="row">
<q-card class="my-card my-content"  v-for="deal in deals" :key="deal.store">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          {{ deal.store }}
        </div>
      </q-img>

      <q-card-section>
        {{ deal.message }}
      </q-card-section>
    </q-card>
</div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'DealsPage',
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
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>
