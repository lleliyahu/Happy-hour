<!-- eslint-disable max-len -->
<template>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
      transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
      <q-carousel-slide :name="1"
        img-src="https://img.freepik.com/free-vector/happy-hour-neon-sign-with-cocktails_23-2148271154.jpg?w=2000">
        <div class="absolute-center custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2"
        img-src="https://img.freepik.com/free-vector/happy-hour-lettering-chalkboard_23-2148279304.jpg" />
      <q-carousel-slide :name="3"
        img-src="https://cloudfront-us-east-1.images.arcpublishing.com/dmn/4JPFCIIXM5AMHJMS72NFHJXGFA.jpg" />
      <q-carousel-slide :name="4" img-src="https://s.hdnux.com/photos/01/21/05/64/21257525/4/rawImage.jpg" />
    </q-carousel>
  </div>
  <div class="shadow-15 animated fadeIn q-card">
    <div class="q-pa-lg q-pa-md-xl q-card__section q-card__section--vert">
      <div class="text-h4 q-mb-md">
        <div>
          <div class="q-pb-none">About Us</div>
        </div>
      </div>
      <div class="lead">
        <div>
          <div class="q-pb-md">Hi there! We are the happy hour team!</div>
          <div class="q-pb-md">Welcome to Happy Hour - the website that brings the ever-changing joy of temporary deals directly to you!</div>
          <div class="q-pb-md">We specialize in finding the best and most cost-effective deals from small and large businesses across the country. Every happy hour on our site will present you with a range of amazing products at surprising prices.</div>
          <div class="q-pb-md">We believe that our diverse audience can enjoy a unique shopping experience while supporting local businesses that offer their incredible creations and local products.</div>
          <div class="q-pb-none">Join us now and start collecting the amazing deals of Happy Hour!</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container full-width relative-position flex column q-mt-xl">
    <div style="background-color: rgba(0, 0, 0, 0.68) !important;">
      <div class=" content q-px-md q-py-xl">
        <div class="text-center">
          <div class="text-h4">
            <div>
              <div class="q-pb-none text-white">Our Specialities</div>
            </div>
          </div>
          <div class="lead condensed">
            <div>
              <div class="q-pb-none text-grey">Discover Our Unforgettable Deals!</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <q-card class="q-pa-sm flex flex-center text-center box-shadow bg-cyan-8 text-white" style="margin: 40px;">
            <q-card-section>
              <q-icon size="110px" name="restaurant" :style="'color:' + theme_color" />
              <div class="text-h6">Restaurants</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Indulge in Culinary Delights: Explore Our Exquisite Restaurant Selection!"
            </q-card-section>
            <q-btn size="lg" rounded dense class="text-white" icon="arrow_forward_ios" to="/Restaurants"></q-btn>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12 ">
          <q-card class="q-pa-sm flex flex-center text-center box-shadow bg-cyan-8 text-white" style="margin: 40px;">
            <q-card-section>
              <q-icon size="110px" name="store" :style="'color:' + theme_color" />
              <div class="text-h6">Stores</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Unlock Retail Bliss: Explore an Array of Captivating Stores!
            </q-card-section>
            <q-btn size="lg" rounded dense class="text-white" icon="arrow_forward_ios" to="/Stores"></q-btn>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <q-card class="q-pa-sm flex flex-center text-center box-shadow bg-red-6 text-white" style="margin: 40px;">
            <q-card-section>
              <q-icon size="110px" name="local_fire_department" :style="'color:' + theme_color" />
              <div class="text-h6">&#128293;Deal Breaker&#128293;</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
             the Deal Breaker: Unbelievable Discounts of 40%-90% Off Await!
            </q-card-section>
            <q-btn size="lg" rounded dense class="text-white" icon="arrow_forward_ios" to="/DealBreaker"></q-btn>
          </q-card>
        </div>
      </div>
    </div>
  </div>
  <div class="container full-width relative-position flex column bg-grey-10 dark">
    <div class="content q-px-md q-py-xl">
      <div class="text-center">
        <div class="text-h4">
          <div>
            <div class="text-white q-pb-none">Want to contact us?</div>
          </div>
        </div>
      </div>
      <div class="q-gutter-md q-mt-lg text-center"><a tabindex="0" role="link"
          class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--rounded bg-grey-9 text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-btn--wrap q-btn--dense"
          style="font-size: 20px;">
          <span class="q-focus-helper">
          </span>
          <span class="q-btn__wrapper col row q-anchor--skip" style="padding: 8px 24px; min-width: 0px; min-height: 0px;">
            <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
              <span class="block">Email
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
