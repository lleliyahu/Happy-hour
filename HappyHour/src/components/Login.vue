<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:485px;">
        <q-card-section class="bg-red-10">
          <h4 class="text-h5 text-white q-my-md">Company &amp; Co</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="add" color="red-10" />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input square clearable v-model="email" type="email" label="Email">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input square clearable v-model="password" type="password" label="Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Sign In" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <p class="text-grey-6">Forgot your password?</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'logIn',

  data() {
    return {
      email: '',
      username: '',
      password: '',
    };
  },
};
</script>
<style scoped>

</style>
