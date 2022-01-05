<template>
  <div class="map">
    <h2>
      {{ brandName }}
    </h2>
  </div>
</template>

<style lang="scss">
.map {
  position: relative;
  margin-top: 9vh;
  width: 90vw;
  height: 49vh;
  background-color: $background;
  color: white;
}
</style>

<script>
import { defineComponent } from 'vue';
import ListTotal from 'src/utils/listTotal';
import store from 'src/store';

export default defineComponent({
  name: 'PageDestination',
  components: {},
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
