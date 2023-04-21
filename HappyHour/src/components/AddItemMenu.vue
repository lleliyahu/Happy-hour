<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:400px;height:600px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Add New Menu Item</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="ItemName" type="text" label="Item Name ">
              <template v-slot:prepend>
                <q-icon name="inventory_2" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="descreption" type="text" label="Descreption">
              <template v-slot:prepend>
                <q-icon name="description" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="Price" type="text" label="Price">
              <template v-slot:prepend>
                <q-icon name="payments" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <div class="q-pa-md">
          <q-uploader :factory="factoryFn" multiple style="max-width: 300px" color="cyan-8" />
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Create" @click="createstore"
            v-close-popup />
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
  name: 'AddItemMenu',

  props: {
    refreshStore:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
  },
  data() {
    return {
      storename: '',
    };
  },
  methods: {
    AddItemMenu() {
      const newStor = {};
      newStor.storename = this.storename;
      newStor.username = localStorage.getItem('user');
      console.log('new store', newStor);
      axios.post('http://localhost:3000/store/create', newStor).then(() => {
        alert('Store created');
        this.refreshStore();
      });
      return true;
    },
    // factoryFn(file){
    //   return new Promise((resolve, reject) => {
    //     this.getBase64(file).then(data => {
    //         // data is base64
    //         console.log('base64', data)
    //         // simulating a delay of 2 seconds
    //         setTimeout(() => {
    //           resolve({
    //             url: 'http://localhost:4444/upload',
    //             method: 'POST',
    //             headers: [{name:'Content-Type',value:'application/json'}],
    //             fields: [{name:'data',value:data}]
    //           })
    //         }, 2000)
    //       }).catch(() => {
    //         this.$q.notify({
    //           color: 'negative',
    //           message: 'Failed to convert file...'
    //         })
    //         reject()
    //       })
    //   })
    // },
    // getBase64 (file) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader()
    //     // reader.onloadend = (e) => resolve(imageToDataUri(e, 400, 400))
    //     reader.readAsDataURL(file)
    //     reader.onload = () => resolve(reader.result)
    //     reader.onerror = error => reject(error)
    //   })
    // },
  },
};
</script>
