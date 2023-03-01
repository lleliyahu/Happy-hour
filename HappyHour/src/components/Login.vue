<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-blue-grey-10" >
          <h4 class="text-h5 text-white q-my-md">Log-In</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="add" @click="goReg" color= grey label=""/>
          </div>
          </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input square clearable v-model="email" type="email"  :rules="[val => !!val || 'Email is missing', isValidEmail]" label="Email">
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
          <q-btn unelevated size="lg" color="blue-grey-10" class="full-width text-white" label="Sign In"  @click="checkuser"/>
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
    isUserConnect: {
      type: Boolean,
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
        console.log('checkuser', response);
        alert('You have seccessfuly sing in');
        // this.isUserConnect = true;
      });
    },
  },
};
</script>
<style scoped>

</style>
