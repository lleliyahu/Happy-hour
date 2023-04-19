<template>
  <div class="image-container">
    <q-img class="image" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
    <div class="row no-wrap items-center justify-start">
            <div class="col text-h6 ellipsis">
              {{ store }}
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'cardDeal',
  props: {
    store: String,
    message: Number,
  },
};
</script>

<style>
.image-container {
  height: 50vh; /* hauteur de 25% de l'écran */
  position: relative; /* position relative pour contenir l'image */
}

.image {
  position: absolute; /* position absolue pour couvrir toute la hauteur du conteneur */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* pour que l'image s'adapte et ne soit pas déformée */
}
</style>
