<!-- eslint-disable max-len -->
<template>
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <q-card class="bg-blue-grey-9 card-bg text-white no-shadow" bordered>
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="120px" class="shadow-10">
              <img src="../../public/icons/discount.png">
            </q-avatar>
            <div class="text-h6 q-mt-lg">My Deals</div>
          </q-card-section>
          <q-item-section>
            <q-card-actions align="center">
              <q-btn label="New deal" class="text-capitalize" rounded color="cyan-8" icon="add" style="max-width: 120px"
                @click="choseedealtypedialog = true"></q-btn>
            </q-card-actions>
          </q-item-section>
          <q-card-section>
            <div class="text-body2 text-justify">
              <div class="q-pa-md" style="max-width: 600px">
                <q-list dense bordered padding class="rounded-borders">
                  <q-item clickable v-ripple>
                    <q-item-section>
                      Deal 1
                    </q-item-section>
                    <q-btn flat rounded icon="edit"></q-btn>
                    <q-btn flat rounded icon="delete"></q-btn>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    <q-dialog v-model="choseedealtypedialog">
      <ChooseDealType></ChooseDealType>
    </q-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue';
import ChooseDealType from 'src/components/ChooseDealType.vue';
import axios from 'axios';

export default defineComponent({
  name: 'UserProfile',
  components: {
    ChooseDealType,
  },
  data: () => ({
    stores: [],
  }),
  setup() {
    return {
      user_details: {},
      password_dict: {},
      createstordialog: ref(false),
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
