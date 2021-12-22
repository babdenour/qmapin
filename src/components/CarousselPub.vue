<template>
  <q-carousel
    :height="heigth"
    swipeable
    animated
    v-model="slide"
    infinite
    :autoplay="autoplay"
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>
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
  props: {
    heigth: String,
  },
};
</script>
