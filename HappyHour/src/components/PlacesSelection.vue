<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:300px;height:385px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Pick a Place</h4>
        </q-card-section>
        <div class="q-pa-md">
          <q-select filled color="cyan-8" v-model="model" use-input use-chips input-debounce="1" @new-value="createValue"
            :options="filterOptions" transition-show="jump-up" transition-hide="jump-up" @filter="filterFn"
            style="max-width: 340px" label="Country">
            <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
          </q-select>
        </div>
        <div class="q-pa-md">
          <q-select filled color="cyan-8" v-model="cityModel" use-input use-chips input-debounce="1"
            @new-value="createCityValue" :options="citiesOptions" transition-show="jump-up" transition-hide="jump-up"
            @filter="filterCityFn" style="max-width: 340px" label="City">
            <q-icon name="cancel" @click.stop.prevent="dealModel = null" class="cursor-pointer" />
          </q-select>
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Continue" @click="checkuser"
            v-close-popup />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

const stringOptions = [
  'Israel',
];

const citiesOptions = [
  'Beni Barak', 'Rishon Letsiyon', "Ra'annana", 'Tel Aviv', 'Petach Tikva',
];

export default {
  setup() {
    const filterOptions = ref(stringOptions);
    const filtercitiesOptions = ref(citiesOptions);

    return {
      model: ref(null),
      cityModel: ref(null),
      filterOptions,
      citiesOptions,

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

      createCityValue(cityVal, done) {
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

        if (cityVal.length > 0) {
          if (!citiesOptions.includes(cityVal)) {
            citiesOptions.push(cityVal);
          }
          done(cityVal, 'toggle');
        }
      },

      filterCityFn(cityVal, update) {
        update(() => {
          if (cityVal === '') {
            filterOptions.value = citiesOptions;
          } else {
            const needle = cityVal.toLowerCase();
            filtercitiesOptions.value = citiesOptions.filter(
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
