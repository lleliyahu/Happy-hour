<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:380px;height:650px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Filter</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="close" color="cyan-8" v-close-popup />
          </div>
        </q-card-section>
        <div class="q-pa-md">
          <h6>Filter By Cuisine:</h6>
          <q-select filled color="cyan-8" v-model="model" use-input use-chips multiple input-debounce="1"
            @new-value="createValue" :options="filterOptions" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterFn" style="max-width: 340px" label="Filter By:">
            <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
          </q-select>
        </div>
        <div class="q-pa-md">
          <h6>Price:</h6>
          <q-select filled color="cyan-8" v-model="priceModel" use-input use-chips multiple input-debounce="1"
            @new-value="createPriceValue" :options="priceOptions" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterPriceFn" style="max-width: 340px" label="Filter By:">
            <q-icon name="cancel" @click.stop.prevent="priceModel = null" class="cursor-pointer" />
          </q-select>
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const stringOptions = [
  'Alcohol', 'Asian', 'American', 'Bakery', 'BBQ', 'Bowl', 'Breakfast',
];

const priceOptions = [
  '$', '$$', '$$$', '$$$$',
];

export default {
  setup() {
    const filterOptions = ref(stringOptions);
    const filterPriceOptions = ref(priceOptions);

    return {
      model: ref(null),
      priceModel: ref(null),
      filterOptions,
      priceOptions,

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
    };
  },
};
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap')

div
  font-family: 'Carter One', cursive

</style>
