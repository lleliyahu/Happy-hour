<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:400px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Choose Store Type</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width" color="cyan-8" label="Store" icon="store"
              @click="createstordialog = true">
            </q-btn>
            <q-dialog v-model="createstordialog">
              <CreateStore :refreshStore="backToProfile"></CreateStore>
            </q-dialog>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width" color="cyan-8" label="Resturant" icon="restaurant"
              @click="createrestaurantdialog"></q-btn>
            <q-dialog>
              <CreateRestaurant :refreshrestaurant="backToProfile"></CreateRestaurant>
            </q-dialog>
          </q-form>
        </q-card-section>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// import ref from 'vue';
// import axios from 'axios';
import CreateStore from './CreateStore.vue';
import CreateRestaurant from './CreateRestaurant.vue';

export default {
  name: 'RegistraTion',
  components: {
    CreateStore,
    CreateRestaurant,
  },
  data() {
    return {
      storename: '',
      createstordialog: false,
      createrestaurantdialog: false,
    };
  },
  props: {
    refreshStore:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
    refreshRestaurant:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
  },
  methods: {
    backToProfile() {
      this.refreshStore();
      this.refreshRestaurant();
    },
  },
  mounted() {
    this.refreshStore();
    this.refreshRestaurant();
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive
</style>
