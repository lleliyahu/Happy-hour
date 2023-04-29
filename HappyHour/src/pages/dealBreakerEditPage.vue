<!-- eslint-disable max-len -->
<template>
  <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
    <q-card class="bg-blue-grey-9 card-bg text-red-6 no-shadow" bordered>
      <q-card-section class="text-center bg-transparent">
        <q-avatar size="120px" class="shadow-10">
          <img src="../../public/icons/discount.png">
        </q-avatar>
        <div class="text-h6 q-mt-lg">&#128293; Edit Deal Breaker &#128293;</div>
      </q-card-section>
      <q-item-section>
        <q-card-actions align="center">
        </q-card-actions>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section icon="store">
          <!-- <q-input dark color="red-6" dense v-model="store_details.store_name" label="Deal For {{ Item }}"
                                                                                              style="max-width: 600px" /> -->
            <div class="q-pa-md">
              <q-select filled bg-color="red" color="white-8" v-model="dealModel" use-input use-chips multiple
                input-debounce="1" @new-value="createDealValue" :options="dealOptions" transition-show="jump-up"
                transition-hide="jump-up" @filter="filterDealFn" style="max-width: 600px;" label="Deal Breaker For:">
                <q-icon name="cancel" @click.stop.prevent="dealModel = null" class="cursor-pointer" />
              </q-select>
            </div>
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section icon="store">
            <div class="q-pa-md">
              <q-select filled bg-color="red" color="white-8" v-model="likesModel" use-input use-chips input-debounce="1"
                @new-value="createLikesValue" :options="likesOptions" @filter="filterPriceFn" transition-show="jump-up"
                transition-hide="jump-up" style="max-width: 600px;" label="Number Of Likes:">
                <q-icon name="cancel" @click.stop.prevent="dealModel = null" class="cursor-pointer" />
              </q-select>
            </div>
          <!-- <q-btn-dropdown color="red-6" label="Number of Likes" style="max-width: 600px">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>20</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>30</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>40</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>50</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>60</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>70</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>80</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>90</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>100</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
                                                                                    </q-btn-dropdown> -->
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-slider class="q-mt-xl" v-model="model" color="primary" markers :marker-labels="fnMarkerLabel" :min="5"
              :max="9" />
          </q-item-section>
        </q-item>
        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-item-section>
            <q-input dark color="red-6" dense v-model="time" label="Set Opening Deal Hour" style="max-width: 600px">
              <template #append>
                <q-icon class="cursor-pointer" name="access_time">
                  <q-popup-proxy cover>
                    <q-time v-model="time" now-btn format24h color="blue-grey-6">
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
            <q-input dark color="red-6" dense v-model="time2" label="Set Closing Deal Hour" style="max-width: 600px">
              <template #append>
                <q-icon class="cursor-pointer" name="access_time">
                  <q-popup-proxy cover>
                    <q-time v-model="time2" now-btn format24h color="blue-grey-6">
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
            <q-input dark color="red-6" dense v-model="days" label="Set Deal Dates" style="max-width: 600px"
              :rules="['days']">
              <template #append>
                <q-icon class="cursor-pointer" name="event">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="days" range multiple color="blue-grey-6">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="blue-grey-6" flat />
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
          <q-btn class="text-capitalize text-white-6" rounded color="green-8" icon="done"
            @click="startdealdialog = true">Start Deal
          </q-btn>
        </q-card-actions>
        <q-card-actions align="right">
          <q-btn class="text-capitalize text-white-6" rounded color="red-8" icon="delete"
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
</template>
<script>
import { defineComponent, ref } from 'vue';
import StartDeal from 'src/components/StartDeal.vue';
import DeleteDeal from 'src/components/DeleteDeal.vue';
import axios from 'axios';

const dealOptions = [
  'Item-1', 'Item-2', 'Item-3', 'Item-4',
];

const likesOptions = [
  '20', '30', '40', '50', '60', '70', '80', '90', '100',
];

export default defineComponent({
  name: 'UserProfile',
  components: {
    StartDeal,
    DeleteDeal,
  },
  data: () => ({
    stores: [],
  }),
  setup() {
    const filterDealOptions = ref(dealOptions);
    const numOfLikesOptions = ref(likesOptions);
    const model = ref(2);
    return {
      dealModel: ref(null),
      likesModel: ref(null),
      dealOptions,
      likesOptions,
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
          if (!dealOptions.includes(dealVal)) {
            dealOptions.push(dealVal);
          }
          done(dealVal, 'toggle');
        }
      },

      filterDealFn(dealVal, update) {
        update(() => {
          if (dealVal === '') {
            filterDealOptions.value = dealOptions;
          } else {
            const needle = dealVal.toLowerCase();
            filterDealOptions.value = dealOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },

      createLikesValue(likesVal, done) {
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

        if (likesVal.length > 0) {
          if (!likesOptions.includes(likesVal)) {
            likesOptions.push(likesVal);
          }
          done(likesVal, 'toggle');
        }
      },

      filterLikesFn(likesVal, update) {
        update(() => {
          if (likesVal === '') {
            numOfLikesOptions.value = likesOptions;
          } else {
            const needle = likesVal.toLowerCase();
            numOfLikesOptions.value = likesOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },
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
  color: $red-6

</style>
