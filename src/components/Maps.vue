<template>
  <div id="map"></div>

  <GmapMap
    :center="{ lat: 10, lng: 10 }"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<style lang="scss" scoped>
#map {
  height: 100%;
}
.text-primary {
  color: $primary;
}
</style>

<script>
import store from 'src/store';

export default {
  components: {},
  props: {
    data: Array,
  },
  data() {
    return {
      map: null,
      location: `/#/destination/`,
      currentGeoLoc: {
        lat: store.getters.getCurrentGeoLoc.lat,
        long: store.getters.getCurrentGeoLoc.long,
      },
    };
  },
  computed: {
    api_key() {
      const api = process.env.API_KEY_GOOGLE;
      const res = `https://www.google.com/maps/embed/v1/place?key=${api}q=Space+Needle,Seattle+WA`;
      return res;
    },
    directionName() {
      return store.getters.getCurrentDestinationName;
    },
    userGeoLoc() {
      const { userGeoLoc } = store.getters.getCurrentGeoLoc;
      return userGeoLoc;
    },
  },
  methods: {
    initMap() {
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    },

    gotoBrand(direction) {
      store.dispatch('setCurrentBrandName', direction);
      window.location.replace(`${this.location}${direction}`);
    },
  },
  async mounted() {
    await this.$google;
    // google now loaded
    // eslint-disable-next-line no-undef
    // console.log(google);
  },
};
</script>
