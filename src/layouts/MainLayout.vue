<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <CarousselPub height="20vh" />
    </q-header>
    <!-- TODO finish the stylingof the map -->

    <q-page-container class="container">
      <q-page-sticky class="search" expand position="top">
        <NavC />
      </q-page-sticky>
      <router-view class="q-mt-xl" />
    </q-page-container>

    <q-footer>
      <CarousselPub height="18vh" />
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: stretch;
  z-index: 99;
}
</style>

<script>
import { defineComponent } from 'vue';

import NavC from 'components/NavC.vue';
import CarousselPub from 'components/CarousselPub.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavC,
    CarousselPub,
  },

  setup() {
    return {};
  },
});
</script>
