<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:400px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Add Restaurant</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input square clearable v-model="restaurantname" type="text" label="Restaurant name">
              <template v-slot:prepend>
                <q-icon name="restaurant" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Create"
            @click="createrestaurant" v-close-popup="2" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistraTion',

  props: {
    refreshRestaurant:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
  },
  data() {
    return {
      restaurantname: '',
    };
  },
  methods: {
    createstore() {
      const newStor = {};
      newStor.storename = this.storename;
      newStor.username = localStorage.getItem('user');
      console.log('new store', newStor);
      axios.post('http://localhost:3000/store/create', newStor).then(() => {
        alert('Store created');
        this.refreshRestaurant();
      });
      return true;
    },
  },
};
</script>
