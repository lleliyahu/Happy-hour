<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:485px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Log in</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="add" @click="goReg" color="cyan-8" label="" />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input square clearable v-model="email" type="email"
              :rules="[val => !!val || 'Email is missing', isValidEmail]" label="Email">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input square clearable v-model="password" type="password"
              :rules="[val => val.length <= 10 || 'Please use maximum 10 characters']" label="Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Sign In" @click="checkuser" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'logIn',
  props: {
    goReg:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
    UserConnect: {
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
    checkuser() {
      const user = {};
      user.email = this.email;
      user.password = this.password;
      axios.get('http://localhost:3000/users/Checkuser', { params: { user } }).then((response) => {
        console.log('checkuser', response.data[0].username);
        localStorage.setItem('user', response.data[0].username);
        alert('You have successfully sign in');
        // this.isUserConnect = true;
        this.UserConnect();
      });
    },
  },
};
</script>
<style scoped></style>
