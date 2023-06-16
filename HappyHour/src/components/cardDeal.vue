<!-- eslint-disable max-len -->
<template>
  <div>
    <router-link :to="{ path: `/StoreDetailsPage/${store}` }">
      <q-card class="my-card" @click="handleImageClick">
        <q-img :src=image style="height: 250px; max-width: 625px" />
        <q-card-section>
          <div class="row no-wrap items-center justify-start">
            <div class="col text-h6 ellipsis">
              {{ store }}
            </div>
            <!-- <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center justify-end">
              <q-icon name="place" />
              250 ft
            </div> -->
          </div>

          <q-rating v-model="stars" :max="5" size="22px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <!-- <div class="text-subtitle1">
            $10 {{message}}
          </div> -->
          <div class="text-caption text-grey">
            {{ description }}
          </div>
        </q-card-section>

        <q-separator />

        <!-- <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions> -->
      </q-card>
    </router-link>
    <div class="fav-icon">
      <q-btn @click="isSubmit = !isSubmit" v-if="isSubmit" fab color='red-6' icon="favorite" class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);" />
      <q-btn @click="isSubmit = !isSubmit" v-else fab color='blue-grey-8' icon="favorite" class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'cardDeal',
  props: {
    store: String,
    description: String,
    image: String,
    message: Number,
  },
  methods: {
    handleImageClick() {
      // Code HERE : what I want to happen after clicking on the Restaurant card
      this.$router.push('/nouvelle-page');
    },
  },
  data() {
    return {
      isSubmit: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.fav-icon
  display: block
  position: relative
  top: -124px
</style>
