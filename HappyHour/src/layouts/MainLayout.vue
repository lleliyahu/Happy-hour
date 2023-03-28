<!-- eslint-disable max-len -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
      <!-- <div class="lt-md">
          <q-btn class="bg-cyan-8" side flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
                                                                                                                                                                    </div> -->
        <q-toolbar-title class="gt-sm">
          <q-btn to="/" flat round>
            <q-img src="../../public/icons/happyhouricon.png" style="width:100px" />
          </q-btn>
        </q-toolbar-title>
        <div>
          <q-btn class="bg-cyan-8" flat round icon="location_on" @click="placesdialog = true">
            <q-dialog v-model="placesdialog">
              <PlacesSelection></PlacesSelection>
            </q-dialog>
          </q-btn>
        <!-- <span>Delviery to</span>
                                                                                                                <q-btn flat round icon="arrow_drop_down"></q-btn> -->
        </div>
        <q-space class="lt-md"></q-space>
        <q-toolbar-title class="lt-md">
          <q-btn to="/" flat round>
            <q-img src="../../public/icons/happyhouricon.png" style="width:100px"></q-img>
          </q-btn>
        </q-toolbar-title>
        <div class="q-pa-md gt-sm" style="max-width: 300px">
          <div class="q-gutter-md">
            <q-input v-model="search" debounce="1000" filled placeholder="Search in Happy Hour">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
        <q-space />
        <div class="gt-sm" v-if="isNotUserConnect">
          <q-btn label="log in" class="bg-blue-grey-8" style="margin-right: 5px;" @click="logindialog = true" />
          <q-dialog v-model="logindialog">
            <logIn :UserConnect="UserConnect" :goReg="goReg"></logIn>
          </q-dialog>
        </div>
        <div class="gt-sm" v-if="isNotUserConnect">
          <q-btn label="sign up" class="bg-cyan-8" @click="regdialog = true" />
          <q-dialog v-model="regdialog">
            <RegistraTion :goLogIn="goLogIn"></RegistraTion>
          </q-dialog>
        </div>
      <!-- <div class="lt-md" v-if="isNotUserConnect">
          <q-btn class="bg-cyan-8" flat round icon="account_circle" @click="logindialog = true" />
          <q-dialog v-model="logindialog">
            <logIn :UserConnect="UserConnect" :goReg="goReg"></logIn>
          </q-dialog>
                                                                          </div> -->
        <div v-if="!isNotUserConnect">
          <q-btn class="bg-cyan-8" flat round icon="account_circle" to="/Profile"></q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-footer class="bg-blue-grey-9" reveal elevated>
      <div id="footer" class="gt-sm">
        <q-toolbar>
          <q-space />
          &copy; Happy Hour
          <q-space />
        </q-toolbar>
      </div>
      <div class="lt-md">
        <q-toolbar>
          <div class="q-pa-md">
            <q-footer bordered class="bg-blue-grey-9 text-primary">
              <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
                <!-- <q-tab name="explore" label="Explore" icon="travel_explore" /> -->
                <q-route-tab to="/Restaurants" name="restaurants" label="Restaurants" icon="restaurant" />
                <q-route-tab to="/Stores" name="stores" label="Stores" icon="store" />
                <q-route-tab to="/DealBreaker" name="dealbreaker" label="Deal Breaker" icon="local_fire_department" />
                <q-tab name="search" label="Search" icon="search" />
                <q-tab name="Profile" label="Profile" icon="account_circle" @click="logindialog = true" />
                <q-dialog v-model="logindialog">
                  <logIn :UserConnect="UserConnect" :goReg="goReg"></logIn>
                </q-dialog>
              </q-tabs>
            </q-footer>
          </div>
        </q-toolbar>
      </div>
    </q-footer>
    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
      <div class="q-pa-md">
        <div class="q-gutter-md row">
          <q-select filled v-model="model" label="Simple select" :options="stringOptions" style="width: 250px"
            behavior="dialog" />

          <q-select filled v-model="model" use-input input-debounce="0" label="Simple filter" :options="options"
            @filter="filterFn" style="width: 250px" behavior="dialog">
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import RegistraTion from 'components/Registration.vue';
import logIn from 'components/Login.vue';
import PlacesSelection from 'components/Places.vue';
// import { tsImportEqualsDeclaration } from '@babel/types';

const linksList = [
  {
    title: 'Deals',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    RegistraTion,
    logIn,
    PlacesSelection,
  },
  data() {
    return {
      username: '',
    };
  },
  methods: {
    goReg() {
      this.logindialog = false;
      this.regdialog = true;
    },
    goLogIn() {
      this.logindialog = true;
      this.regdialog = false;
    },
    UserConnect() {
      this.logindialog = false;
      this.isNotUserConnect = false;
      console.log('user', localStorage.getItem('user'));
      this.username = localStorage.getItem('user');
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      regdialog: ref(false),
      logindialog: ref(false),
      placesdialog: ref(false),
      essentialLinks: linksList,
      leftDrawerOpen,
      tab: ref('images'),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      isNotUserConnect: ref(true),
      user: {},
    };
  },
});
</script>
<style></style>
