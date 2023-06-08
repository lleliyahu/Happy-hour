<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="image-container" style="height:250px;">
      <q-img class="image" src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ storeName }}
        </div>
      </q-img>

    </div>
    <div class="q-pa-md">
      <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
        <q-header elevated>
          <q-bar>
            <q-icon name="schedule" color="blue-grey-8" />
            <div style="color: #36486b;">Open until</div>
            <div class="q-pa-md q-gutter-sm">
              <q-btn label="See more information" color="blue-grey-8" icon="info" @click="moreinfodialog = true" />
              <q-dialog v-model="moreinfodialog">
                <seeMoreInfo></seeMoreInfo>
              </q-dialog>
            </div>

            <q-space />
            <div class="q-pa-md gt-xs" color="blue-grey-8" style="max-width: 300px;max-height: 120px;">
              <div class="q-gutter-md">
                <q-input color="blue-grey-8" v-model="search" debounce="1000" borderless placeholder="Search">
                  <template v-slot:append>
                    <q-icon color="blue-grey-8" name="search" />
                  </template>
                </q-input>
              </div>
            </div>

          </q-bar>
          <div class="q-pa-sm q-pl-md row items-center lt-sm">
            <div class="q-pa-md" style="max-width: 300px;max-height: 50px;">
              <div class="q-gutter-md">
                <q-input v-model="search" debounce="1000" borderless placeholder="Search in {{ storeName }}">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </q-header>
        <h2>Store Deals</h2>
        <div class="q-pa-md">

          <div class="row q-col-gutter-sm">
            <q-card class="my-card col-xs-12 col-sm-6 col-md-4" v-for="deal in deals" :key="deal._id">
              <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150"></q-parallax>
              <q-card-section>
                <q-chip dense color="red" text-color="white" :label=deal.deal />
                <div class="text-h6">{{ deal.dealfor[0] }}</div>
                <div class="float-right"><q-btn color="cyan-8" icon="shopping_cart"
                    @click="addToBasket(deal.dealfor[0])"></q-btn></div>
                <div class="text-grey-8 text-subtitle2">{{ deal.days[0].from }}-{{ deal.days[0].to }}</div>
                <div class="text-blue-grey-8 text-subtitle2">Price:</div>
              </q-card-section>
            </q-card>
            <q-space />
          </div>

        </div>
        <h2>Store Menu</h2>
        <div class="row q-col-gutter-sm">
          <q-card class="my-card col-xs-12 col-sm-6 col-md-4" v-for="item in menu" :key="item.name">
            <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150" />

            <q-card-section>
              <div class="text-h6">{{ item.name }}</div>
              <div class="float-right"><q-btn color="cyan-8" icon="shopping_cart" @click="addToBasket(item.name)"></q-btn>
              </div>
              <div class="text-grey-8 text-subtitle2">{{ item.des }}</div>
              <div class="text-blue-grey-8 text-subtitle2">{{ item.price }}$</div>
            </q-card-section>
          </q-card>
        </div>
        <h2>Customer Review</h2>
        <h4>Add Your Review</h4>
        <div class="q-pa-md">
          <q-uploader url="http://localhost/api/upload" field-name="photo" flat multipale bordered square no-thumbnails
            batch accept="image/*" @rejected="onRejected" auto-upload :factory="factoryFn" multiple
            style="max-width: 300px" color="cyan-8" />
        </div>
        <!-- <div class="q-pa-xl row justify-center bg-grey-3 shadow">
          <div style="width: 100%; max-width: 400px">
            <q-chat-message name="Aang" bg-color="blue-6" text-color="white">
              <template #avatar>
                <q-avatar class="bg-blue text-white q-message-avatar q-message-avatar--received">
                  A
                </q-avatar>
              </template>
              <q-img class="q-mt-md"
                src="data:image/jpeg;base64,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"></q-img></q-chat-message>
            <q-chat-message :text="['doing fine, how r you?']" />
          </div>
        </div> -->
        <div class="q-pa-md row justify-center bg-grey-3 shadow">
          <div style="width: 100%; max-width: 400px">
            <q-chat-message name="Ana" avatar="https://cdn.quasar.dev/img/avatar3.jpg" stamp="7 minutes ago"
              text-color="white" bg-color="blue-grey-8" size="1000">

              <div>
                Have you seen Quasar?
                <img style="width: 100%;max-with:100px;"
                  src="https://images.squarespace-cdn.com/content/v1/5f9decf1e529e27a4705d448/1681676661420-MZGRIQXRH7H87EH70AB9/MacBook+Pro+-+22banner-17.png?format=2500w"
                  class="my-emoticon">
              </div>
            </q-chat-message>

            <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" bg-color="amber">
              <q-spinner-dots size="2rem" />
            </q-chat-message>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>

        <!-- <div class="q-pa-md">
          <q-table flat bordered title="Treats" :rows="rows" :columns="columns" row-key="name">

            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th auto-width />
                <q-th v-for="col in props.cols" :key="col.name" :props="props">
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td auto-width>
                  <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand"
                    :icon="props.expand ? 'remove' : 'add'" />
                </q-td>
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                  {{ col.value }}
                </q-td>
              </q-tr>
              <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                  <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
                </q-td>
              </q-tr>
            </template>

          </q-table>
        </div> -->

      </q-layout>
    </div>
  </div>
</template>

<script>
import seeMoreInfo from 'src/components/SeeMoreInfo.vue';
import axios from 'axios';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true,
  },
  {
    name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true,
  },
  {
    name: 'carbs', label: 'Carbs (g)', field: 'carbs',
  },
  {
    name: 'protein', label: 'Protein (g)', field: 'protein',
  },
  {
    name: 'sodium', label: 'Sodium (mg)', field: 'sodium',
  },
  {
    name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];
const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
];
export default {
  name: 'cardDeal',
  components: {
    seeMoreInfo,
  },
  props: ['storeName'],
  data: () => ({
    city_address: '',
    store_phone: '',
    post_code: '',
    street_address: '',
    menu: [],
    storeModel: {},
    deals: {},
  }),
  methods: {
    changeColor() {
      this.$refs.favoriteButton.color = 'red';
    },
    getStoreDetails() {
      const body = {};
      body.storename = this.storeName;
      console.log('body', body);
      axios.post('http://localhost:3000/store/getStoreData', body).then((response) => {
        console.log('data', response.data);
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
      this.getdeals();
    },
    getdeals() {
      const store = {};
      store.storename = this.storeName;
      axios.get('http://localhost:3000/deals/storeDeals', { params: { store } }).then((response) => {
        this.deals = response.data.valueOf();
        console.log('this.dealseeeeeeee', this.deals);
      });
    },
    addToBasket(mnueitem) {
      const body = {};
      body.storename = this.storeName;
      body.menuitem = mnueitem;
      axios.post('http://localhost:3000/store/addOrders', body).then((response) => {
        console.log('addToBasket', response.data);
      });
    },
  },
  mounted() {
    this.getStoreDetails();
  },
  // watch: {
  //   isFavorite(val) {
  //     this.$refs.favoriteButton.color = val ? 'red' : 'black';
  //   },
  // },
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style>
.image-container {
  /* height: 50vh; */
  /* hauteur de 25% de l'écran */
  position: relative;
  /* position relative pour contenir l'image */
  text-decoration: none;
  color: #333;
}

.image {
  position: absolute;
  /* position absolue pour couvrir toute la hauteur du conteneur */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* pour que l'image s'adapte et ne soit pas déformée */
}
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
