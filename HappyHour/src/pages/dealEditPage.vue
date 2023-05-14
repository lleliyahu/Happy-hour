<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
      <q-card class="bg-blue-grey-9 card-bg text-white no-shadow" bordered>
        <q-card-section class="text-center bg-transparent">
          <q-avatar size="120px" class="shadow-10">
            <img src="../../public/icons/discount.png">
          </q-avatar>
          <div class="text-h6 q-mt-lg">Edit Deal</div>
        </q-card-section>
        <q-item-section>
          <q-card-actions align="center">
          </q-card-actions>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section icon="store">
              <!-- <q-input dark color="white" dense v-model="store_details.store_name" label="Deal For {{ Item }}"
                                                                                      style="max-width: 600px" /> -->
              <div class="q-pa-md">
                <q-select filled bg-color="white" color="cyan-8" v-model="storeModel" use-input use-chips
                  input-debounce="1" @new-value="createStoreValue" :options="storeOptions" transition-show="jump-up"
                  transition-hide="jump-up" style="max-width: 600px;" label="Choose Store:">
                  <q-icon name="cancel" @click.stop.prevent="storeModel = null" class="cursor-pointer" />
                </q-select>
              </div>
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section icon="store">
              <!-- <q-input dark color="white" dense v-model="store_details.store_name" label="Deal For {{ Item }}"
                                                                                      style="max-width: 600px" /> -->
              <div class="q-pa-md">
                <q-select filled bg-color="white" color="cyan-8" v-model="dealModel" use-input use-chips multiple
                  input-debounce="1" @new-value="createDealValue" :options="dealOptions" transition-show="jump-up"
                  transition-hide="jump-up" @filter="filterDealFn" style="max-width: 600px;" label="Deal For:">
                  <!-- <q-icon name="cancel" @click.stop.prevent="dealModel = null" class="cursor-pointer" /> -->
                </q-select>
              </div>
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-slider class="q-mt-xl" v-model="model" color="cyan-8" markers :marker-labels="fnMarkerLabel" :min="1"
                :max="4" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input dark color="white" dense v-model="opening_time" label="Set Opening Deal Hour" style="max-width: 600px">
                <template #append>
                  <q-icon class="cursor-pointer" name="access_time">
                    <q-popup-proxy cover>
                      <q-time v-model="opening_time" now-btn format24h color="cyan-8">
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
              <q-input dark color="white" dense v-model="closing_time" label="Set Closing Deal Hour" style="max-width: 600px">
                <template #append>
                  <q-icon class="cursor-pointer" name="access_time">
                    <q-popup-proxy cover>
                      <q-time v-model="closing_time" now-btn format24h color="cyan-8">
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
              <q-input dark color="white" dense v-model="days_view" label="Set Deal Dates" style="max-width: 600px"
                :rules="['days']">
                <template #append>
                  <q-icon class="cursor-pointer" name="event">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="days" range multiple color="cyan-8">
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
                                                                                                                                                    </q-item-section>                                                                                                                                                          </q-item> -->
          <q-card-actions align="right">
            <q-btn class="text-capitalize text-white" rounded color="green-8" icon="done"
              @click="create_deal">Start Deal
            </q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn class="text-capitalize text-white" rounded color="red-8" icon="delete"
              @click="deletedealdialog = true">Delete Deal</q-btn>
          </q-card-actions>
        </q-item-section>
      </q-card>
    </div>
    <q-dialog v-model="startdealdialog">
      <StartDeal></StartDeal>
    </q-dialog>
    <q-dialog v-model="deletedealdialog">
      <DeleteDeal></DeleteDeal>
    </q-dialog>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import StartDeal from 'src/components/StartDeal.vue';
import DeleteDeal from 'src/components/DeleteDeal.vue';
import axios from 'axios';

export default defineComponent({
  name: 'UserProfile',
  components: {
    StartDeal,
    DeleteDeal,
  },
  data: () => ({
    stores: [],
    storeOptions: [],
    storeModel: {},
    closing_time: '',
    opening_time: '',
  }),
  computed: {
    // a computed getter
    days_view() {
      return '2023/05/01 - 2023/05/18';
    },
    dealOptions() {
      let menuVal = [];
      if (this.stores !== undefined) {
        this.stores.forEach((x) => {
          if (x.valueOf().storename === this.storeModel) {
            menuVal = x.valueOf().menu.valueOf().map((y) => y.name);
          }
        });
      }
      return menuVal;
    },
  },
  setup() {
    // this.filterDealOptions = ref(dealOptions);
    // this.filterStoreOptions = ref(storeOptions);
    const model = ref(2);
    return {
      dealModel: ref(null),
      // dealOptions,
      // storeOptions,
      model,

      createDealValue(dealVal, done) {
        // Calling done(var) when new-value-mode is not set or "add",
        // or done(var, "add") adds "var" content to the model
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "add-unique",
        // or done(var, "add-unique") adds "var" content to the model
        // only if is not already set
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "toggle",
        // or done(var, "toggle") toggles the model with "var" content
        // (adds to model if not already in the model, removes from model if already has it)
        // and it resets the input textbox to empty string
        // ----
        // If "var" content is undefined/null, then it doesn't tampers with the model
        // and only resets the input textbox to empty string

        if (dealVal.length > 0) {
          if (!this.dealOptions.includes(dealVal)) {
            this.dealOptions.push(dealVal);
          }
          done(dealVal, 'toggle');
        }
      },

      // filterDealFn(dealVal, update) {
      //   update(() => {
      //     if (dealVal === '') {
      //       filterDealOptions.value = dealOptions;
      //     } else {
      //       const needle = dealVal.toLowerCase();
      //       filterDealOptions.value = dealOptions.filter(
      //         (v) => v.toLowerCase().indexOf(needle) > -1,
      //       );
      //     }
      //   });
      // },

      createStoreValue(storeVal, done) {
        // Calling done(var) when new-value-mode is not set or "add",
        // or done(var, "add") adds "var" content to the model
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "add-unique",
        // or done(var, "add-unique") adds "var" content to the model
        // only if is not already set
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "toggle",
        // or done(var, "toggle") toggles the model with "var" content
        // (adds to model if not already in the model, removes from model if already has it)
        // and it resets the input textbox to empty string
        // ----
        // If "var" content is undefined/null, then it doesn't tampers with the model
        // and only resets the input textbox to empty string

        if (storeVal.length > 0) {
          if (!this.storeOptions.includes(storeVal)) {
            this.storeOptions.push(storeVal);
          }
          done(storeVal, 'toggle');
        }
      },

      // filterStoreFn(storeVal, update) {
      //   update(() => {
      //     if (storeVal === '') {
      //       filterStoreOptions.value = storeOptions;
      //     } else {
      //       const needle = storeVal.toLowerCase();
      //       filterStoreOptions.value = storeOptions.filter(
      //         (v) => v.toLowerCase().indexOf(needle) > -1,
      //       );
      //     }
      //   });
      // },
      fnMarkerLabel: (val) => `${10 * val}%`,
      store_details: {},
      password_dict: {},
      createstordialog: ref(false),
      time: ref('00:00'),
      time2: ref('00:00'),
      date: ref('2023/04/01'),
      days: ref([
        { from: '2023/04/01', to: '2023/04/10' },
        { from: '2023/04/21', to: '2020/04/25' },
      ]),
    };
  },
  methods: {
    getStores() {
      const body = {};
      body.username = localStorage.getItem('user');
      console.log('body', body);
      axios.post('http://localhost:3000/store/getStore', body).then((response) => {
        this.stores = response.data;
        this.stores.forEach((element) => {
          this.storeOptions.push(element.storename);
        });
        console.log('test', response.data);
      });
    },
    create_deal() {
      const newDeal = {};
      newDeal.usstorename = localStorage.getItem('user');
      newDeal.storename = this.storeModel;
      newDeal.closing_time = this.closing_time;
      newDeal.opening_time = this.opening_time;
      newDeal.days = this.days;
      console.log('new_deal:', newDeal);
      axios.post('http://localhost:3000/store/create_deal', newDeal)
        .then(() => {
          console.log('deal created');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getStores();
    // console.log(this.deals);
  },
});
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
