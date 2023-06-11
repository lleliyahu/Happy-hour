<!-- eslint-disable max-len -->
<template>
  <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
    <q-card class="bg-blue-grey-9 card-bg text-white no-shadow" bordered>
      <q-card-section class="text-center bg-transparent">
        <q-avatar size="120px" class="shadow-10">
          <img src="../../public/icons/store.png">
        </q-avatar>
        <div class="text-h6 q-mt-lg">Edit Store</div>
      </q-card-section>
      <q-item-section>
        <div class="row">
          <div class="col">
            <q-card-actions align="center">
            </q-card-actions>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section icon="store">
                <q-input dark color="white" dense v-model="storename" label="Store Name" style="max-width: 600px" />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="q-pa-md">
                <q-select filled bg-color="white" color="cyan-8" v-model="cityModel" use-input use-chips
                  input-debounce="1" @new-value="createCityValue" :options="citiesOptions" transition-show="jump-up"
                  transition-hide="jump-up" @filter="filterCityFn" style="max-width: 600px" label="City">
                  <q-icon name="cancel" @click.stop.prevent="dealModel = null" class="cursor-pointer" />
                </q-select>
              </div>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense :rules="[
                    val => !!val || '* Required',
                    val => val.length > 2 && val.length < 40 || 'Please use minimum 2 character',
                  ]" lazy-rules v-model="store_desc" filled autogrow label="Store Description"
                  style="max-width: 600px" />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense v-model="street_address" type="text" label="Street Address"
                  style="max-width: 600px" />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense v-model="post_code" type="number" label="Postal Code"
                  style="max-width: 600px" />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense v-model="store_phone" type="number" fill-mask mask="(###) - ### - ####"
                  hint="Mask: (###) ### - ####" label="Store Phone" style="max-width: 600px" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="q-pa-md">
                  <q-select filled bg-color="white" color="cyan-8" v-model="storeModel" use-input use-chips
                    input-debounce="1" @new-value="createStoreValue" :options="storeOptions" transition-show="jump-up"
                    transition-hide="jump-up" style="max-width: 600px;" label="Choose Store Filters:">
                    <q-icon name="cancel" @click.stop.prevent="storeModel = null" class="cursor-pointer" />
                  </q-select>
                </div>
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense v-model="time" label="Set Opening Hour" style="max-width: 600px">
                  <template #append>
                    <q-icon class="cursor-pointer" name="access_time">
                      <q-popup-proxy cover>
                        <q-time v-model="time" now-btn format24h color="cyan-8">
                          <div class="row justify-end">
                            <q-btn v-close-popup flat label="close"></q-btn>
                            <q-btn v-close-popup type="submit" flat label="Submit"></q-btn>
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense v-model="time2" label="Set Closing Hour" style="max-width: 600px">
                  <template #append>
                    <q-icon class="cursor-pointer" name="access_time">
                      <q-popup-proxy cover>
                        <q-time v-model="time2" now-btn format24h color="cyan-8">
                          <div class="row justify-end">
                            <q-btn v-close-popup flat label="close"></q-btn>
                            <q-btn v-close-popup type="submit" flat label="Submit"></q-btn>
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input dark color="white" dense v-model="days" label="Set Opening Dates" style="max-width: 600px"
                  :rules="['days']">
                  <template #append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="days" multiple color="cyan-8">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <!-- <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <div class="q-pa-md">
              <q-time v-model="time" landscape now-btn format24h color="black" />
            </div>
          </q-item-section>
          </q-item> -->
          </div>
          <div class="col">
            <div class="q-pa-md">
              <h7>Edit menu</h7>
              <!-- <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
     >

      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Add row" @click="addRow" />
        <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table> -->
              <q-table title="Menu" class="no-shadow" :rows="menu" :columns="column" hide-bottom>
                <template v-slot:top>
                  <q-btn color="green-8" :disable="loading" label="Add Item" @click="AddItemMenudialog = true" />
                  <!-- <q-btn class="q-ml-sm" color="red-8" :disable="loading" label="Remove Item" @click="removeRow" /> -->
                  <q-space />
                  <q-input borderless dense debounce="300" color="black-8" v-model="filter">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
                <template v-slot:body-cell-Image="props">
                  <q-td :props="props" style="max-width: 100px">
                    <q-item>
                      <q-item-section avatar>
                        <q-avatar>
                          <img :src=" props.row.image">
                        </q-avatar>
                      </q-item-section>
                    </q-item>
                  </q-td>
                </template>
                <q-td>
                  <q-btn icon="delete"></q-btn>
                </q-td>
                <q-tr v-show="props.expand" :props="props">
                  <q-td colspan="100%">
                    <div class="text-left">This is expand slot for row above: {{ props.row.storeName }}.</div>
                  </q-td>
                </q-tr>
              </q-table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-card-actions align="right">
              <q-btn class="text-capitalize text-white" rounded color="cyan-8" icon="edit_note" @click="updateStore">
                Update Store Info</q-btn>
              <q-btn class="text-capitalize text-white" rounded color="cyan-8" icon="edit_note"
                :to="{ path: `/StoreData/${storename}` }">My store data</q-btn>
            </q-card-actions>
            <q-card-actions align="right">
              <q-btn class="text-capitalize text-white" rounded color="red-8" icon="delete">Delete Store</q-btn>
            </q-card-actions>
          </div>
        </div>
      </q-item-section>

    </q-card>
    <q-dialog v-model="EditMenudialog">
      <EditMenu></EditMenu>
    </q-dialog>
    <q-dialog v-model="AddItemMenudialog">
      <AddItemMenu :addItem='addItem' :storename=storename></AddItemMenu>
    </q-dialog>
  </div>
  <br>
  <br>
  <br>
  <br>
  <!-- <q-dialog v-model="choseedealtypedialog">
    <ChooseDealType></ChooseDealType>
                                                                                                      </q-dialog> -->
</template>
<script>
import { defineComponent, ref } from 'vue';
// import ChooseDealType from 'src/components/ChooseDealType.vue';
import EditMenu from 'src/components/EditMenu.vue';
import axios from 'axios';
import AddItemMenu from 'src/components/AddItemMenu.vue';
// import { ElementTypes } from '@vue/compiler-core';

const column = [
  {
    name: 'Image', label: 'Image', field: 'image', sortable: true, align: 'left',
  },
  {
    name: 'Name', label: 'Name', field: 'name', sortable: true, align: 'left',
  },
  {
    name: 'Description', label: 'Description', field: 'des', sortable: true, align: 'left',
  },
  {
    name: 'Price', label: 'Price', field: 'price', sortable: true, align: 'left',
  },
  {
    name: 'Ordes', label: 'Orders', field: 'orders', sortable: true, align: 'left',
  },
  {
    name: 'Remove Item', label: 'Remove Item', field: 'remove item', align: 'left',
  },

];

const citiesOptions = [
  'Beni Barak', 'Rishon Letsiyon', "Ra'annana", 'Tel Aviv', 'Petach Tikva',
];

const storeOptions = [
  'Alcohol', 'Florist', 'General Merchandise', 'Grocery', 'Health & Beauty', 'Pet Supply', 'Pharmacy',
];

export default defineComponent({
  name: 'UserProfile',
  components: {
    AddItemMenu,
    EditMenu,
  },
  props: ['storeName'],
  data: () => ({
    storename: '',
    city_address: '',
    store_phone: '',
    post_code: '',
    street_address: '',
    menu: [],
    storeModel: {},
  }),
  setup() {
    const filtercitiesOptions = ref(citiesOptions);
    const filterStoreOptions = ref(storeOptions);
    return {
      store_details: {},
      password_dict: {},
      createstordialog: ref(false),
      time: ref('00:00'),
      time2: ref('00:00'),
      date: ref('2023/04/01'),
      days: ref(['2023/01/01', '2023/12/31']),
      cityModel: ref(null),
      // storeModel: ref(null),
      citiesOptions,
      storeOptions,
      EditMenudialog: ref(false),
      AddItemMenudialog: ref(false),
      column,
      getColor(val) {
        if (val > 5 && val <= 100) {
          return 'green';
        }
        if (val > 3 && val <= 5) {
          return 'blue';
        }
        return 'red';
      },
      createValue(val, done) {
        if (val.length > 0) {
          if (!storeOptions.includes(val)) {
            storeOptions.push(val);
          }
          done(val, 'toggle');
        }
      },

      filterFn(val, update) {
        update(() => {
          if (val === '') {
            filterStoreOptions.value = storeOptions;
          } else {
            const needle = val.toLowerCase();
            filterStoreOptions.value = storeOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },
      createCityValue(cityVal, done) {
        if (cityVal.length > 0) {
          if (!citiesOptions.includes(cityVal)) {
            citiesOptions.push(cityVal);
          }
          done(cityVal, 'toggle');
        }
      },

      filterCityFn(cityVal, update) {
        update(() => {
          if (cityVal === '') {
            filtercitiesOptions.value = citiesOptions;
          } else {
            const needle = cityVal.toLowerCase();
            filtercitiesOptions.value = citiesOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },
      // columns,
      // rows,

      // loading,
      // filter,
      // rowCount,

      // // emulate fetching data from server
      // addRow() {
      //   loading.value = true;
      //   setTimeout(() => {
      //     const index = Math.floor(Math.random() * (rows.value.length + 1));
      //     const row = originalRows[Math.floor(Math.random() * originalRows.length)];
      //     if (rows.value.length === 0) {
      //       rowCount.value = 0;
      //     }

      //     row.id = rowCount.value + 1;
      //     const newRow = { ...row }; // extend({}, row, { name: `${row.name} (${row.__count})` })
      //     rows.value = [...rows.value.slice(0, index), newRow, ...rows.value.slice(index)];
      //     loading.value = false;
      //   }, 500);
      // },

      // removeRow() {
      //   loading.value = true;
      //   setTimeout(() => {
      //     const index = Math.floor(Math.random() * rows.value.length);
      //     rows.value = [...rows.value.slice(0, index), ...rows.value.slice(index + 1)];
      //     loading.value = false;
      //   }, 500);
      // },
    };
  },
  methods: {
    refreshStore() {
      const body = {};
      body.username = localStorage.getItem('user');
      body.storename = this.storeName;
      console.log('body', body);
      axios.post('http://localhost:3000/store/getStoreData', body).then((response) => {
        this.storename = response.data[0].storename;
        this.city_address = response.data[0].city_address;
        this.store_phone = response.data[0].store_phone;
        this.post_code = response.data[0].post_code;
        this.street_address = response.data[0].street_address;
        if (response.data[0].menu === undefined) {
          this.menu = [];
        } else {
          this.menu = response.data[0].menu;
        }
      });
    },
    updateStore() {
      const newStoreDetails = {};
      newStoreDetails.usstorename = localStorage.getItem('user');
      newStoreDetails.storename = this.storeName;
      newStoreDetails.city_address = this.city_address;
      newStoreDetails.post_code = this.post_code;
      newStoreDetails.store_phone = this.store_phone;
      newStoreDetails.menu = this.menu;
      newStoreDetails.street_address = this.street_address;
      console.log('newStoreDetails:', newStoreDetails);
      axios.post('http://localhost:3000/store/update', newStoreDetails)
        .then(() => {
          this.refreshStore();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addItem(item) {
      const blob = await fetch(item.image).then(res => res.blob())
      console.log('item    ', blob);
      this.menu.push(item);
    },
  },
  mounted() {
    this.refreshStore();
    this.storename = this.storeName;
  },
});
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
