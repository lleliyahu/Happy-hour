<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:400px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Choose Deal Type</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width" label="Deal" icon="percent"></q-btn>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width text-white" color="red-6" label="Deal Breaker"
              icon="local_fire_department"></q-btn>
          </q-form>
        </q-card-section>
      <!-- <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Create"
            @click="ChooseDealType" />
                      </q-card-actions> -->
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'RegistraTion',

  props: {
    goLogIn:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
  },
  data() {
    return {
      storename: '',
    };
  },
  methods: {
    ChooseDealType() {
      // const newStor = {};
      // newStor.storename = this.storename;
      // newStor.username = localStorage.getItem('user');
      // console.log('new store', newStor);
      // axios.post('http://localhost:3000/store/create', newStor).then((response) => {
      //   console.log('User add', response);
      //   alert('You have seccessfuly registration');
      console.log('hey');
    },
    // return true;
  },
  // },
};
</script>
