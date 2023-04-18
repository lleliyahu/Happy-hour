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
            <q-input dark color="white" dense v-model="store_details.store_name" label="Store Name"
              style="max-width: 600px" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dark color="white" dense v-model="store_details.store_city_address" label="City Address"
              style="max-width: 600px" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dark color="white" dense v-model="store_details.store_street_address" label="Street Address"
              style="max-width: 600px" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dark color="white" dense v-model="store_details.post_code" label="Postal Code"
              style="max-width: 600px" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dark color="white" dense v-model="store_details.store_phone" label="Store Phone"
              style="max-width: 600px" />
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
        <q-card-actions align="left">
          <q-btn class="text-capitalize text-white" rounded color="cyan-8" icon="edit" @click="EditMenudialog = true">Edit Menu</q-btn>
        </q-card-actions>
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
    <q-table class="no-shadow" :rows="data3" :columns="column" hide-bottom>
        <template v-slot:body-cell-Name="props">
          <q-td :props="props" style="max-width: 100px">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ props.row.name }}</q-item-label>
                <q-item-label caption class="">{{ props.row.des }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-Task="props">
          <q-td :props="props">
            <q-item>
              <q-item-section>
                <q-item-label>
                    <span class="text-blue">
                      <q-icon name="bug_report" color="blue" size="20px" v-if="props.row.type=='error'"></q-icon>
                      <q-icon name="settings" color="blue" size="20px" v-if="props.row.type=='info'"></q-icon>
                      <q-icon name="flag" color="blue" size="20px" v-if="props.row.type=='success'"></q-icon>
                      <q-icon name="fireplace" color="blue" size="20px" v-if="props.row.type=='warning'"></q-icon>
                      {{ props.row.issue }}
                    </span>
                  <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="positive"
                          v-if="props.row.type=='success'"></q-chip>
                  <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="info"
                          v-if="props.row.type=='info'"></q-chip>
                  <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="warning"
                          v-if="props.row.type=='warning'"></q-chip>
                  <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="negative"
                          v-if="props.row.type=='error'"></q-chip>
                </q-item-label>
                <q-item-label caption class="">
                  <q-linear-progress dark :color="getColor(props.row.Progress)" :value="props.row.Progress/100"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
      </q-table>
  </div>
</div>
      </div>
      <div class="row">
        <div class="col">
      <q-card-actions align="right">
          <q-btn class="text-capitalize text-white" rounded color="cyan-8" icon="edit_note">Update Store Info</q-btn>
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
  </div>
  <!-- <q-dialog v-model="choseedealtypedialog">
    <ChooseDealType></ChooseDealType>
  </q-dialog> -->
</template>
<script>
import { defineComponent, ref } from 'vue';
// import ChooseDealType from 'src/components/ChooseDealType.vue';
import EditMenu from 'src/components/EditMenu.vue';
import axios from 'axios';

const column = [
  {
    name: 'Name', label: 'Name', field: 'name', sortable: true, align: 'left',
  },
  {
    name: 'Task', label: 'Task', field: 'task', sortable: true, align: 'left',
  },
];
const data3 = [
  {
    name: 'Pratik Patel',
    des: 'Developer',
    Progress: 70,
    type: 'info',
    issue: '#125',
    avatar: 'https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4',
  },
  {
    name: 'Mayank Patel',
    des: 'Developer',
    Progress: 60,
    type: 'success',
    issue: '#1425',
    avatar: 'https://avatars2.githubusercontent.com/u/27857088?s=400&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4',
  },
  {
    name: 'Mayur Patel',
    des: 'Developer',
    Progress: 30,
    type: 'warning',
    issue: '#1475',
    avatar: 'https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4',
  },
  {
    name: 'Jeff Galbraith',
    des: 'Developer',
    Progress: 100,
    type: 'success',
    issue: '#134',
    avatar: 'https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4',
  },
];

export default defineComponent({
  name: 'UserProfile',
  components: {
    EditMenu,
  },
  data: () => ({
    stores: [],
  }),
  setup() {
    return {
      store_details: {},
      password_dict: {},
      createstordialog: ref(false),
      time: ref('00:00'),
      time2: ref('00:00'),
      date: ref('2023/04/01'),
      days: ref(['2023/01/01', '2023/12/31']),
      EditMenudialog: ref(false),
      column,
      data3,
      getColor(val) {
        if (val > 70 && val <= 100) {
          return 'green';
        }
        if (val > 50 && val <= 70) {
          return 'blue';
        }
        return 'red';
      },
    };
  },
  methods: {
    refreshStore() {
      const body = {};
      body.username = localStorage.getItem('user');
      console.log('body', body);
      axios.post('http://localhost:3000/store/getStore', body).then((response) => {
        this.stores = response.data;
        console.log('test', response.data);
      });
    },
  },
  mounted() {
    this.refreshStore();
    // console.log(this.deals);
  },
});
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
