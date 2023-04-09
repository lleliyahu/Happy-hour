<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:400px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Are You Sure?</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width" label="Confirm Deal" icon="done"></q-btn>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width text-white" color="red-6" label="Cancel Deal" icon="close"></q-btn>
          </q-form>
        </q-card-section>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegistraTion',

  data() {
    return {
      storename: '',
    };
  },
  methods: {
    StartDeal() {
      console.log('hey');
    },
  },
};
</script>
