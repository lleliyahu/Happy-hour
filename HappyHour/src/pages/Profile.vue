<!-- eslint-disable max-len -->
<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="bg-blue-grey-9 card-bg text-white no-shadow" bordered>
          <q-card-section class="text-h6 ">
            <div class="text-h6">Edit Profile</div>
            <div class="text-subtitle2">Complete your profile</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <q-avatar size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-btn label="Add Photo" class="text-capitalize" rounded color="cyan-8"
                    style="max-width: 120px"></q-btn>
                  <q-btn label="Create store" class="text-capitalize" rounded color="cyan-8" style="max-width: 120px"
                    @click="createstordialog = true"></q-btn>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" dense v-model="user_details.user_name" label="User Name" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" dense v-model="user_details.email" label="Email Address" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" dense v-model="user_details.first_name" label="First Name" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" dense v-model="user_details.last_name" label="Last Name" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" autogrow dense v-model="user_details.address" label="Address" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" dense v-model="user_details.city" label="City" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" dense v-model="user_details.post_code" label="Postal Code" />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dark color="white" type="textarea" dense v-model="user_details.about" label="About" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize text-white" color="cyan-8">Update User Info</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <q-card class="bg-blue-grey-9 card-bg text-white no-shadow" bordered>
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="100px" class="shadow-10">
              <img src="../../public/icons/store.png">
            </q-avatar>
            <div class="text-h6 q-mt-lg">My Stores:</div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2 text-justify">
              <div class="q-pa-md" style="max-width: 600px">
                <q-list dense bordered padding class="rounded-borders">
                  <q-item clickable v-ripple>
                    <q-item-section>
                      Store 1
                    </q-item-section>
                    <q-btn flat rounded icon="edit"></q-btn>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section>
                      Store 2
                    </q-item-section>
                    <q-btn flat rounded icon="edit"></q-btn>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section>
                      Store 3
                    </q-item-section>
                    <q-btn flat rounded icon="edit"></q-btn>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="bg-blue-grey-9 card-bg text-white no-shadow" bordered>
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Change Password</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Current Password
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input type="password" dark dense outlined color="white" round v-model="password_dict.current_password"
                  label="Current Password" />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                New Password
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input type="password" dark dense outlined color="white" round v-model="password_dict.new_password"
                  label="New Password" />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Confirm New Password
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input type="password" dark dense outlined round color="white"
                  v-model="password_dict.confirm_new_password" label="Confirm New Password" />
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-info text-white">
              Change Password</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="createstordialog">
      <CreateStore></CreateStore>
    </q-dialog>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
import CreateStore from 'components/CreateStore.vue';

export default defineComponent({
  name: 'UserProfile',
  components: {
    CreateStore,
  },
  setup() {
    return {
      user_details: {},
      password_dict: {},
      createstordialog: ref(false),
    };
  },
});
</script>
