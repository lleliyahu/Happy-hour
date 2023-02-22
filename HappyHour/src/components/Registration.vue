<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:485px;">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md">Registration</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="close" color="purple-4" />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
           <q-input square clearable v-model="email" type="email"
            :rules="[val => !!val || 'Email is missing', isValidEmail]"
               label="Email">
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
          <q-btn unelevated size="lg" color="purple-4" class="full-width text-white"
          @click="addUser"
           label="Get Started" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <p class="text-grey-6">Return to login</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'RegistraTion',

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
        alert('You have seccessfuly registration');
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

<style>

</style>
