<!-- eslint-disable max-len -->
<template>
  <div class="main-wrapper">
    <q-page class="q-pa-sm bg-white">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <q-card class="bg-grey-2 no-shadow" bordered>
          <q-card-section class="text-center text-h6 text-black ">
            <q-icon name="shopping_cart" class="q-mr-sm"/>
                Deals Summary
          </q-card-section>
          <q-card v-if="showCard1" class="bg-grey-2 no-shadow" bordered>
                <q-card-section horizontal>
                  <q-card-section class="col-5 flex flex-center">
                    <q-img height="80px"
                          class="rounded-borders"
                          src="https://cdn.quasar.dev/img/parallax2.jpg"/>
                  </q-card-section>
                  <q-card-section class="col-7">
                    <div class="separate">
                        <div class="text-subtitle2 q-mt-sm">Product 1</div>
                        <div class="text-subtitle2  q-mb-xs">$10.99</div>
                    </div>
                    <div class="flex justify-end">
                        <q-btn flat rounded icon="delete" @click="deleteCard(1)"></q-btn>
                    </div>
                  </q-card-section>
                </q-card-section>
          </q-card>
          <div v-if="!showCard1">
              <!-- Contenu sous "Deals Summary" lorsque la carte est supprimée -->
          </div>
          <q-separator/>
          <q-card v-if="showCard2" class="bg-grey-2 no-shadow" bordered>
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center">
              <q-img height="80px"
                     class="rounded-borders"
                     src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
            <q-card-section class="col-7">
              <div class="separate">
                  <div class="text-subtitle2 q-mt-sm">Product 2</div>
                  <div class="text-subtitle2  q-mb-xs">$79.99</div>
              </div>
              <div class="flex justify-end">
                  <q-btn flat rounded icon="delete" @click="deleteCard(2)"></q-btn>
              </div>
            </q-card-section>
          </q-card-section>
          </q-card>
          <div v-if="!showCard2">
              <!-- Contenu sous "Deals Summary" lorsque la carte est supprimée -->
          </div>
          <q-separator/>
          <q-card v-if="showCard3" class="bg-grey-2 no-shadow" bordered>
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center">
              <q-img height="80px"
                     class="rounded-borders"
                     src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
            <q-card-section class="col-7">
              <div class="separate">
                  <div class="text-subtitle2 q-mt-sm">Product 3</div>
                  <div class="text-subtitle2  q-mb-xs">$129.99</div>
              </div>
              <div class="flex justify-end">
                  <q-btn flat rounded icon="delete" @click="deleteCard(3)"></q-btn>
              </div>
            </q-card-section>
          </q-card-section>
          </q-card>
          <div v-if="!showCard3">
              <!-- Contenu sous "Deals Summary" lorsque la carte est supprimée -->
          </div>
          <q-separator/>
          <q-card v-if="showCard4" class="bg-grey-2 no-shadow" bordered>
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center">
              <q-img height="80px"
                     class="rounded-borders"
                     src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
            <q-card-section class="col-7">
              <div class="separate">
                  <div class="text-subtitle2 q-mt-sm">Product 4</div>
                  <div class="text-subtitle2  q-mb-xs">$159.99</div>
              </div>
              <div class="flex justify-end">
                  <q-btn flat rounded icon="delete" @click="deleteCard(4)"></q-btn>
              </div>
            </q-card-section>
          </q-card-section>
          </q-card>
          <div v-if="!showCard4">
              <!-- Contenu sous "Deals Summary" lorsque la carte est supprimée -->
          </div>
          <q-separator/>
          <q-card v-if="showCard5" class="bg-grey-2 no-shadow" bordered>
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center">
              <q-img height="80px"
                     class="rounded-borders"
                     src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
            <q-card-section class="col-7">
              <div class="separate">
                  <div class="text-subtitle2 q-mt-sm">Product 5</div>
                  <div class="text-subtitle2  q-mb-xs">$190.99</div>
              </div>
              <div class="flex justify-end">
                  <q-btn flat rounded icon="delete" @click="deleteCard(5)"></q-btn>
              </div>
            </q-card-section>
          </q-card-section>
          </q-card>
          <div v-if="!showCard5">
              <!-- Contenu sous "Deals Summary" lorsque la carte est supprimée -->
          </div>
          <q-separator></q-separator>
          <q-card-section class="row">
            <div class="col-12 text-h6 full-width">
              <span class="q-mr-sm q-mt-lg">
                <q-btn flat icon="delete" @click="showConfirmationDialog" />
              </span>
            <div class="float-right">
              Total : <span class="text-blue">$288.96</span>
            </div>
          </div>
          </q-card-section>

<!-- ------------------------------------------------------------------------------------------------------ -->
        </q-card>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary" class="no-shadow" bordered
          animated
        >
          <q-step
            :name="1"
            title="Shipping address"
            icon="shopping_cart"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <div class="row">
              <div class="col-6">
                 <q-item>
                  <q-input dense autogrow outlined v-model="address_details.first_name" class="full-width" label="First Name"
                       :rules="[val => !!val || 'This field is required']" @input="validateAddressDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined v-model="address_details.last_name" class="full-width" label="Last Name"
                      :rules="[val => !!val || 'This field is required']" @input="validateAddressDetailsForm"/>
                </q-item>
              </div>
              <div class="col-12">
                <q-item>
                  <q-input dense autogrow outlined v-model="address_details.address" class="full-width" label="Address"
                      :rules="[val => !!val || 'This field is required']" @input="validateAddressDetailsForm"/>
                </q-item>
              </div>
              <div class="col-12">
                <q-item>
                  <q-input dense autogrow outlined v-model="address_detail.address_line_2" class="full-width"
                           label="More Address details"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined v-model="address_details.city" class="full-width" label="City"
                      :rules="[val => !!val || 'This field is required']" @input="validateAddressDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense outlined class="full-width" v-model="address_detail.state" label="State"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense outlined class="full-width" v-model="address_detail.zip_code" label="Zip Code"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined v-model="address_details.country" class="full-width" label="Country"
                      :rules="[val => !!val || 'This field is required']" @input="validateAddressDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-checkbox color="blue" dense outlined class="full-width" v-model="address_detail.checkbox"
                              label="Save this address ?"/>
                </q-item>
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn rounded @click="() => { done1 = true; step = 2 }" class="float-right q-mr-md q-mb-md" color="cyan-8"
                     label="Next" :disabled="!isFormValid"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Payment details"
            icon="shopping_cart"
            :done="step > 2"
            :header-nav="step > 2"
          >

            <div class="row">
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined class="full-width" v-model="card_details.name" label="Name on Card"
                  :rules="[val => !!val || 'This field is required']" @input="validateCardDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined class="full-width" v-model="card_details.card_number" label="Card Number"
                  :rules="[val => !!val || 'This field is required']" @input="validateCardDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined v-model="card_details.expiry_date" class="full-width" label="Expiry Date"
                  :rules="[val => !!val || 'This field is required']" @input="validateCardDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input dense autogrow outlined v-model="card_details.cvv" class="full-width" label="CVV"
                  :rules="[val => !!val || 'This field is required']" @input="validateCardDetailsForm"/>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-checkbox color="blue" dense outlined class="full-width" v-model="address_detail.checkbox"
                              label="Save Credit Card details ?"/>
                </q-item>
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn rounded @click="() => { done2 = true; step = 3 }" color="cyan-8" label="Next" class="float-right q-mr-md q-mb-md" :disabled="!isCardDetailsValid"/>
              <q-btn rounded @click="step = 1" color="blue-grey-9" label="Back" class="q-mr-sm float-right"/>
            </q-stepper-navigation>

          </q-step>

          <q-step
            :name="3"
            title="Review your order"
            icon="shopping_cart"
            :header-nav="step > 3"
          >
            <div class="row">
              <div class="col-12">
                <q-item-label header class="text-h6">Order summary</q-item-label>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Product 1</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    $10.99
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Product 2</q-item-label>
                    <q-item-label caption>Caption Product 2</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    $19.99
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Product 3</q-item-label>
                    <q-item-label caption>Caption Product 3</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    $78.99
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Product 4</q-item-label>
                    <q-item-label caption>Caption Product 4</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    $178.99
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Product 5</q-item-label>
                    <q-item-label caption>Caption Product 2</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    $19.99
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>

                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Shipping</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    Free
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width" style="border-top: 3px dotted blue">
                  <q-item-section>
                    <q-item-label lines="1">Total</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    $288.96
                  </q-item-section>
                </q-item>
              </div>
            </div>

            <q-card class="rounded-borders">
              <q-card-section horizontal>
                <q-card-section class="col-5 q-pt-xs">
                  <div class="text-h6 text-center">Shipping</div>
                  <div class="text-subtitle1 ">Pratik Patel</div>
                  <div class="text-subtitle2">
                    4841 Johnston Locks
                  </div>
                </q-card-section>
                <q-card-section class="col-7 q-pt-xs">
                  <div class="text-h6 text-center">Payment details</div>
                  <div class="text-subtitle1 q-mb-xs">Card type - Visa</div>
                  <div class="text-subtitle1 q-mb-xs">Card holder - P***ik Patel</div>
                  <div class="text-subtitle1 q-mb-xs">Card Number - xxxx-xxxx-xxxx-1234</div>
                  <div class="text-subtitle1 q-mb-xs">Expiry date - 04/2012</div>
                </q-card-section>

              </q-card-section>
            </q-card>

            <q-stepper-navigation>

              <q-btn rounded @click="done3 = true"  color="cyan-8" label="Place Order" class="float-right q-mr-md q-mb-md"/>
              <q-btn rounded @click="step = 2" color="blue-grey-9" label="Back" class="q-mr-sm float-right"/>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>

    </div>

  </q-page>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { ref } from 'vue';

export default defineComponent({
  name: 'CheckOut',
  methods: {
    validateAddressDetailsForm() {
      // Optional: You can perform additional validation or modifications here
    },
    validateCardDetailsForm() {
      // Optional: You can perform additional validation or modifications here
    },
    deleteCard(index) {
      if (index === 1) {
        this.showCard1 = false;
      } else if (index === 2) {
        this.showCard2 = false;
      } else if (index === 3) {
        this.showCard3 = false;
      } else if (index === 4) {
        this.showCard4 = false;
      } else if (index === 5) {
        this.showCard5 = false;
      }
    },
    showConfirmationDialog() {
      this.$q.dialog({
        title: 'Confirmation',
        message: 'Delete all the deals?',
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          this.clearCart();
        })
        .show(); // Ajoutez cette ligne pour afficher la boîte de dialogue
    },
    clearCart() {
      // Ajoutez ici la logique pour supprimer tous les deals
      // Par exemple, vous pouvez réinitialiser les variables ou vider les tableaux de deals
      this.showCard1 = false;
      this.showCard2 = false;
      this.showCard3 = false;
      this.showCard4 = false;
      this.showCard5 = false;
    },

  },
  computed: {
    isFormValid() {
      return !!this.address_details.first_name && !!this.address_details.last_name
             && !!this.address_details.address && !!this.address_details.city
             && !!this.address_details.country;
    },
    isCardDetailsValid() {
      return !!this.card_details.name && !!this.card_details.card_number
             && !!this.card_details.expiry_date && !!this.card_details.cvv;
    },
  },
  setup() {
    return {
      step: ref(1),
      address_detail: ref({}),
      card_detail: ref({}),
    };
  },
  data() {
    return {
      address_details: {
        address: '',
        first_name: '',
        last_name: '',
        city: '',
        country: '',
      },
      done1: false,
      // steps: 1,
      done2: false,

      showCard1: true,
      showCard2: true,
      showCard3: true,
      showCard4: true,
      showCard5: true,

      card_details: {
        name: '',
        card_number: '',
        expiry_date: '',
        cvv: '',
      },
    };
  },
});
</script>

<style scoped>

</style>
