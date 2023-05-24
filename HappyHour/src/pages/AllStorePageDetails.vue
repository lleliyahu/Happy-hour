<!-- eslint-disable max-len -->
<template>
  <div class="image-container" style="height:250px;">
    <q-img class="image" src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
      <div class="absolute-bottom text-subtitle1 text-center">
        {{ storeName }}
      </div>
    </q-img>
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
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2>Store Deals</h2>
        <div class="q-pa-md">

          <div class="row q-col-gutter-sm">
            <q-card class="my-card col-xs-12 col-sm-6 col-md-4" v-for="deal in deals" :key="deal._id">
              <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150"></q-parallax>
              <q-card-section>
                <q-chip dense color="red" text-color="white" :label=deal.deal />
                <div class="text-h6">{{ deal.dealfor[0] }}</div>
                <div class="float-right"><q-btn color="cyan-8" icon="shopping_cart"></q-btn></div>
                <div class="text-subtitle2">{{ deal.days[0].from }}-{{ deal.days[0].to }}</div>
                <div class="text-subtitle2">Price:</div>
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
              <div class="text-grey-8 text-subtitle2">{{ item.des }}</div>
              <div class="text-blue-grey-8 text-subtitle2">{{ item.price }}$</div>
            </q-card-section>
          </q-card>
        </div>

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
