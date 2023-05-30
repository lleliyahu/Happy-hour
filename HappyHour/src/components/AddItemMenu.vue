<!-- eslint-disable max-len -->
<template>
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:400px;height:600px;">
        <q-card-section class="bg-blue-grey-9">
          <h4 class="text-h5 text-white q-my-md">Add New Menu Item</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="itemName" type="text" label="Item Name ">
              <template v-slot:prepend>
                <q-icon name="inventory_2" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="descreption" type="text" label="Descreption">
              <template v-slot:prepend>
                <q-icon name="description" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt">
            <q-input square clearable v-model="price" prefix="$" type="text" label="Price">
              <template v-slot:prepend>
                <q-icon name="payments" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <div class="q-pa-md">
          <q-uploader :factory="factoryFn" multiple style="max-width: 300px" color="cyan-8" />
        </div>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="cyan-8" class="full-width text-white" label="Create" @click="AddMenuItem"
            v-close-popup />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AddItemMenu',

  props: {
    refreshMenu:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
    addItem:
    {
      type: Function,
      default() { return console.log('Default function aa'); },
    },
    storename:
    {
      type: String,
      default: 'aaaaaa',
    },
  },
  data() {
    return {
      itemName: '',
      descreption: '',
      price: '',
      prefix: '$ ',
    };
  },
  methods: {
    AddMenuItem() {
      const menu = {};
      menu.name = this.itemName;
      menu.des = this.descreption;
      menu.price = this.price;
      menu.orders = 0;
      this.addItem(menu);
      return true;
    },
  },
};

</script>
