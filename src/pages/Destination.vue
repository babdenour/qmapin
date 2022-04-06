<template style="height: 100%">
  <q-header>
    <CarousselPub height="20vh" />
  </q-header>
  <div class="map">
    <h2>
      {{ $route.params.brandName }}
    </h2>
    <img src="../assets/mapImage.png" alt="map" />
    <!-- <Maps /> -->
    <!-- <GmapMap :zoom="1" :center="23">
      <DirectionRenderer />
    </GmapMap> -->
  </div>
</template>

<style lang="scss">
.map {
  position: fixed;
  top: 30vh;
  width: 98vw;
  height: 28rem;
  background-color: $background;
  color: white;

  h2 {
    color: gray;
    margin: 0;
    position: absolute;
    top: 250px;
    left: 20px;
    z-index: 2;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

<script>
import { defineComponent } from 'vue';
import store from 'src/store';
import ListTotal from 'src/utils/listTotal';
import CarousselPub from 'src/components/CarousselPub.vue';

// import Maps from 'src/components/Maps.vue';
// import DirectionRenderer from 'src/components/DirectionRenderer.vue';

export default defineComponent({
  name: 'PageDestination',
  components: {
    CarousselPub,
  },
  store,
  data() {
    return {
      ListTotal,
    };
  },
  computed: {
    brandName() {
      return store.getters.getCurrentDestinationName;
    },
  },
});
</script>
