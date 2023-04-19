<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:520px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Create an account</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="close" color="cyan-8" v-close-popup />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
            <q-input square clearable v-model="email" type="email"
              :rules="[val => !!val || 'Email is missing', isValidEmail]" label="Email">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input square clearable v-model="username" type="username" label="Username">
              <template v-slot:prepend>
                <q-icon name="person" />
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
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" @click="addUser" label="Get Started" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <q-btn outline rounded color="blue-grey-9" label="Return to login" @click="goLogIn" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

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
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    addUser() {
      const newUser = {};
      newUser.username = this.username;
      newUser.password = this.password;
      newUser.email = this.email;
      if (this.isValidEmail(this.email) === 'Invalid email') {
        return false;
      }
      axios.post('http://localhost:3000/users/add', newUser).then((response) => {
        console.log('User add', response);
        alert('You have successfully registered');
      });
      return true;
    },
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Invalid email';
    },
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
