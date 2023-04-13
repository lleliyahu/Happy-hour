<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:485px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Delete Deal?</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width" label="Cancel Remove Deal" icon="close"></q-btn>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-btn size="lg" class="full-width text-white" color="red-6" label="Remove Deal" icon="delete"></q-btn>
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
  name: 'deleteDeal',
  props: {

  },
  data() {

  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Alata', sans-serif
</style>
