<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-btn @click="handleImageClick">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
