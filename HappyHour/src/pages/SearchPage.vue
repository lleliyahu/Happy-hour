<!-- eslint-disable max-len -->
<template>
  <div class="q-pa-md lt-sm">
    <div class="q-gutter-md">
      <q-input debounce="1000" filled placeholder="Search in Happy Hour">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
</template>
