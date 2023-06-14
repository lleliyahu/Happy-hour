<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:380px;height:650px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Store</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="close" color="cyan-8" v-close-popup />
          </div>
        </q-card-section>
        <div class="q-pa-md">
          <h6>Polo Ralph Lauren</h6>
          <h7>Store Description</h7>
          <br>
          <br>
          <p1> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting.
          </p1>
          <div class="q-pa-m">
            <h6>Oppening Hours:</h6>
            <p2>Sunday - Thurday
                08:00 - 22:00
            </p2>
          </div>
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>

</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
