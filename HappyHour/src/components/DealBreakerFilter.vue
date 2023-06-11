<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-md bg-blue-grey-9">
    <div class="row">
      <q-card square class="shadow-24" style="width:380px;height:900px;">
        <q-card-section class="bg-red-9">
          <h4 class="text-h5 text-white q-my-md">&#128293;Filter&#128293;</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="close" color="blue-grey-8" v-close-popup />
          </div>
        </q-card-section>
        <div class="q-pa-sm">
          <h6>Restaurant or Store:</h6>
          <q-select filled color="red-8" v-model="model" use-input use-chips multiple input-debounce="1"
            @new-value="createChoiceValue" :options="mainFilter" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterFn" style="max-width: 340px" label="Filter By:" class="q-mb-sm">
            <q-icon name="cancel" @click.stop.prevent="mainModel = null" class="cursor-pointer" />
          </q-select>

          <div style="margin-bottom: 50px;"></div>

          <q-select filled color="red-8" v-model="model" use-input use-chips multiple input-debounce="1"
            @new-value="createValue" :options="filterOptions" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterFn" style="max-width: 340px" label="Filter By:">
            <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
          </q-select>
        </div>
        <div class="q-pa-sm">
          <h6>Price:</h6>
          <q-select filled color="red-8" v-model="priceModel" use-input use-chips multiple input-debounce="1"
            @new-value="createPriceValue" :options="priceOptions" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterPriceFn" style="max-width: 340px" label="Filter By:">
            <q-icon name="cancel" @click.stop.prevent="priceModel = null" class="cursor-pointer" />
          </q-select>
        </div>
        <div class="q-pa-sm">
          <h6>Deal:</h6>
          <q-select filled color="red-8" v-model="dealModel" use-input use-chips multiple input-debounce="1"
            @new-value="createDealValue" :options="dealOptions" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterDealFn" style="max-width: 340px" label="Filter By:">
            <q-icon name="cancel" @click.stop.prevent="dealModel = null" class="cursor-pointer" />
          </q-select>
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="blue-grey-8" class="full-width text-white" label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const restaurantOrStore = [
  'Restaurants', 'Stores',
];

const stringOptions = [
  'Alcohol', 'Asian', 'American', 'Bakery', 'BBQ', 'Bowl', 'Breakfast', 'Florist', 'General Merchandise', 'Grocery', 'Health & Beauty', 'Pet Supply', 'Pharmacy',
];

const priceOptions = [
  '$', '$$', '$$$', '$$$$',
];

const dealOptions = [
  '50%', '60%', '70%', '80%', '90%',
];

export default {
  setup() {
    const filterOptions = ref(stringOptions);
    const filterPriceOptions = ref(priceOptions);
    const filterDealOptions = ref(dealOptions);
    const mainFilter = ref(restaurantOrStore);

    return {
      mainModel: ref(null),
      model: ref(null),
      priceModel: ref(null),
      dealModel: ref(null),
      mainFilter,
      filterOptions,
      priceOptions,
      dealOptions,

      createChoiceValue(val, done) {
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

        if (val.length > 0) {
          if (!restaurantOrStore.includes(val)) {
            restaurantOrStore.push(val);
          }
          done(val, 'toggle');
        }
      },

      filterMainFn(val, update) {
        update(() => {
          if (val === '') {
            mainFilter.value = restaurantOrStore;
          } else {
            const needle = val.toLowerCase();
            mainFilter.value = restaurantOrStore.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },

      createValue(val, done) {
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

        if (val.length > 0) {
          if (!stringOptions.includes(val)) {
            stringOptions.push(val);
          }
          done(val, 'toggle');
        }
      },

      filterFn(val, update) {
        update(() => {
          if (val === '') {
            filterOptions.value = stringOptions;
          } else {
            const needle = val.toLowerCase();
            filterOptions.value = stringOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },

      createPriceValue(priceVal, done) {
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

        if (priceVal.length > 0) {
          if (!priceOptions.includes(priceVal)) {
            priceOptions.push(priceVal);
          }
          done(priceVal, 'toggle');
        }
      },

      filterPriceFn(priceVal, update) {
        update(() => {
          if (priceVal === '') {
            filterOptions.value = priceOptions;
          } else {
            const needle = priceVal.toLowerCase();
            filterPriceOptions.value = priceOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },

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
              (dv) => dv.toLowerCase().indexOf(needle) > -1,
            );
          }
        });
      },
    };
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
