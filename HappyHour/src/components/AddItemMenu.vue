<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:400px;height:650px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Add New Menu Item</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="itemName" type="text" label="Item Name ">
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
            <q-input square clearable v-model="price" prefix="$" type="text" label="Price">
              <template v-slot:prepend>
                <q-icon name="payments" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <div class="q-pa-md">
          <q-file v-model="image" label="Item Photo" filled style="max-width: 300px" @change="updateFile()" />
          <q-img :src="fileUrl" spinner-color="white" style="height: 140px; max-width: 150px" />
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Create" @click="AddMenuItem"
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
import { ref } from 'vue';

export default {
  name: 'AddItemMenu',

  props: {
    refreshMenu:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
    addItem:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
    storename:
    {
      type: String,
      default: 'aaaaaa',
    },
  },
  data() {
    return {
      itemName: '',
      descreption: '',
      price: '',
      prefix: '$ ',
      image: ref(null),
      image1Url: ref(''),
    };
  },
  setup() {
  },
  computed: {
    fileUrl() {
      let url = '';
      if (this.image !== null) {
        url = URL.createObjectURL(this.image);
      }
      return url;
    },
  },
  methods: {
    blobToBase64(blob) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    },
    updateFile() {
      console.log('image gggggggggggggggggggggggg');
    },
    AddMenuItem() {
      const menu = {};
      menu.name = this.itemName;
      menu.des = this.descreption;
      menu.price = this.price;
      menu.orders = 0;
      const body = {};
      body.name = this.itemName;
      body.price = this.price;
      axios.post('http://localhost:3000/store/checkMenuItemPrice', body).then((response) => {
        if (response.data === 'ok') {
          this.blobToBase64(this.image).then((x) => {
            menu.image = x;
            this.addItem(menu);
          });
        } else {
          const answer = window.confirm('The price is higher than average, are you sure you want to continue?');
          if (answer) {
            this.blobToBase64(this.image).then((x) => {
              menu.image = x;
              this.addItem(menu);
            });
          }
        }
      });
    },
  },
  onRejected(rejectedEntries) {
    console.log(rejectedEntries);
  },
};

</script>
