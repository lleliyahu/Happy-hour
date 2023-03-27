<template>
  <div class="page-wrapper">
    <div class="footer">
      <div class="gt-sm">
        <q-toolbar>
          <q-space />
          &copy; Happy Hour
          <q-space />
        </q-toolbar>
      </div>
    </div>
  </div>
</template>
<style>
.page-wrapper {
  position: relative;
  min-height: 100vh;
}

.page-content {
  padding-bottom: 60px;
  /* adjust this value to match the height of your footer */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  /* adjust this value to match the height of your footer */
}
</style>
