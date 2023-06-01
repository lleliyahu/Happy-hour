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
              <CreateStore :refreshStore="refreshStore"></CreateStore>
            </q-dialog>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width" color="cyan-8" label="Resturant" icon="restaurant"
              to="EditDealBreaker"></q-btn>
          </q-form>
        </q-card-section>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import CreateStore from 'components/CreateStore.vue';
import ref from 'vue';
import axios from 'axios';

export default {
  name: 'RegistraTion',
  components: {
    CreateStore,
  },
  data() {
    return {
      storename: '',
    };
  },
  setup() {
    return {
      createstordialog: ref(false),
    };
  },
  methods: {
    refreshStore() {
      const body = {};
      body.username = localStorage.getItem('user');
      console.log('body', body);
      axios.post('http://localhost:3000/store/getStore', body).then((response) => {
        this.stores = response.data;
        console.log('test', response.data);
      });
    },
  },
  mounted() {
    this.refreshStore();
    // console.log(this.deals);
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive
</style>
