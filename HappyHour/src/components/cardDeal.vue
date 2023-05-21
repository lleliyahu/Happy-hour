<!-- eslint-disable max-len -->
<template>
  <div>
    <router-link  :to="{ path: `/StoreDetailsPage/${store}` }"  >
    <q-card class="my-card" @click="handleImageClick">

        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center justify-start">
            <div class="col text-h6 ellipsis">
              {{ store }}
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center justify-end">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="22px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <!-- <div class="text-subtitle1">
            $10 {{message}}
          </div> -->
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <!-- <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions> -->
       </q-card>
       </router-link>

</div>
</template>
<script>
export default {
  name: 'cardDeal',
  props: {
    store: String,
    message: Number,
  },
  methods: {
    handleImageClick() {
      // Code HERE : what I want to happen after clicking on the Restaurant card
      this.$router.push('/nouvelle-page');
    },
  },
};
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>
