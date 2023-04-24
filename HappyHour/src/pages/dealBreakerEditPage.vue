<!-- eslint-disable max-len -->
<template>
  <div class="q-pa-md">
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
              <q-input dark color="red-6" dense v-model="store_details.store_name" label="Deal For {{ Item }}"
                style="max-width: 600px" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section icon="store">
              <q-btn-dropdown color="red-6" label="Number of Likes" style="max-width: 600px">
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
              </q-btn-dropdown>
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
  }),
  setup() {
    const model = ref(2);
    return {
      model,
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
