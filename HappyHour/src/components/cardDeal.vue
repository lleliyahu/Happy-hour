<template>
  <div>
    <q-card class="my-card my-content">
    <div class="my-content">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-h6">
            {{ store }}
          </div>
        </q-img>
        <q-card-section>
        {{ message }}
        </q-card-section>
      </div>
    </q-card>
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

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>
