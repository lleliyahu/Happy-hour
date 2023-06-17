<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:380px;height:650px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">{{ store }}</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="close" color="cyan-8" v-close-popup />
          </div>
        </q-card-section>
        <div class="q-pa-md">
          <h7>Store Description</h7>
          <br>
          <p1> {{ description }}
          </p1>
          <br>
          <br>
          <h7>Store Address</h7>
          <br>
          <p1>{{ street_address }}</p1>
          <br>
          <br>
          <h7>Store Phone Number</h7>
          <br>
          <p1>{{ store_phone }}</p1>
          <br>
          <br>
          <h7>Store Postal Code</h7>
          <br>
          <p1>{{ post_code }}</p1>
          <div class="q-pa-m">
            <h6>Oppening Hours:</h6>
            <p2>Sunday - Thurday
              08:00 - 22:00
            </p2>
          </div>
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardDeal',
  components: {

  },
  props: {
    store: String,
    description: String,
    store_phone: String,
    street_address: String,
    post_code: String,
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
