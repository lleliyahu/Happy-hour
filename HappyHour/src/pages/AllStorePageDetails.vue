<!-- eslint-disable max-len -->
<template>
  <div class="image-container" style="height:250px;">
    <q-img class="image" src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
      <div class="absolute-bottom text-subtitle1 text-center">
        {{ storeName }}
      </div>
    </q-img>
    <!-- <q-icon class="absolute all-pointer-events" size="32px" name="favorite" color="white" style="top: 8px; left: 8px">

      <q-tooltip class="bg-cyan">
        Add to favorite
      </q-tooltip>
    </q-icon> -->
    <q-btn class="favorite-button" icon="favorite" @click="changeColor" color="red"></q-btn>

    <q-btn class="favorite-button" icon="favorite" :color="isFavorite ? 'red' : 'black'" @click="onFavorite"
      watch="isFavorite"></q-btn>

    <div class="row no-wrap items-center justify-start">
      <div class="col text-h6 ellipsis" color="white">
        store
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-bar>
          <q-icon name="schedule" />
          <div>Open until</div>
          <div class="q-pa-md q-gutter-sm">
            <q-btn label="See more information" color="blue-grey-8" icon="info" @click="moreinfodialog = true" />
            <q-dialog v-model="moreinfodialog">
              <seeMoreInfo></seeMoreInfo>
            </q-dialog>
          </div>

          <q-space />
          <div class="q-pa-md gt-xs" style="max-width: 300px;max-height: 120px;">
            <div class="q-gutter-md">
              <q-input v-model="search" debounce="1000" borderless placeholder="Search in {{ storeName }}">
                <template v-slot:append>
                  <q-icon name="search" />
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
        <!-- <div class="q-pa-sm q-pl-md row items-center">
          <div class="cursor-pointer non-selectable">
            File
            <q-menu>
              <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Open...</q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>New</q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable>
                  <q-item-section>Preferences</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>

                  <q-menu anchor="top end" self="top start">
                    <q-list>
                      <q-item v-for="n in 3" :key="n" dense clickable>
                        <q-item-section>Submenu Label</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" />
                        </q-item-section>
                        <q-menu auto-close anchor="top end" self="top start">
                          <q-list>
                            <q-item v-for="n in 3" :key="n" dense clickable>
                              <q-item-section>3rd level Label</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>

                <q-separator />

                <q-item clickable v-close-popup>
                  <q-item-section>Quit</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>

          <div class="q-ml-md cursor-pointer non-selectable">
            Edit
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>Cut</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Copy</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Paste</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Select All</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
        </div> -->
      </q-header>
      <br>
      <br>
      <br>
      <h2>Store Deals</h2>
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>
      <h2>Store Menu</h2>
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

    </q-layout>
  </div>
</template>

<script>
import seeMoreInfo from 'src/components/SeeMoreInfo.vue';

export default {
  name: 'cardDeal',
  components: {
    seeMoreInfo,
  },
  props: ['storeName'],
  methods: {
    changeColor() {
      this.$refs.favoriteButton.color = 'red';
    },
  },
  mounted() {
    console.log('store name::::::::::', this.storeName);
  },
  watch: {
    isFavorite(val) {
      this.$refs.favoriteButton.color = val ? 'red' : 'black';
    },
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
