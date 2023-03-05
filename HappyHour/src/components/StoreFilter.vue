<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:500px;height:720px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Filter</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn :color="btnColor" label="Alcohol" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="Asian" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="American" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="Bakery" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="BBQ" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="Bowl" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <hr>
            <h5>Price</h5>
            <q-btn :color="btnColor" label="$" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="$$" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="$$$" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
            <q-btn :color="btnColor" label="$$$$" @click="changeMe" class="q-ma-sm" unelevated rounded></q-btn>
          </q-form>
          <hr>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="blue-grey-9" class="full-width text-white" label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {

  name: 'storeFilter',

  data() {
    return {
      email: '',
      username: '',
      password: '',
      btnColor: 'blue-2',
      btnIcon: 'warning',
    };
  },
  methods: {
    changeMe() {
      this.btnColor = 'blue';
      this.regdialog = 'done';
    },
  },
};
</script>
<style scoped></style>
