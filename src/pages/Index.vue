<template>
  <div class="box">
    <List id="list" :data="ListTotal" class="q-pa-sm list" />
  </div>
  <q-footer>
    <CarousselPub height="18vh" />
  </q-footer>
</template>

<script>
import { defineComponent } from 'vue';
import ListTotal from 'src/utils/listTotal';
import List from 'components/List.vue';
import CarousselPub from 'components/CarousselPub.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    List,
    CarousselPub,
  },

  data() {
    return {
      ListTotal,
    };
  },
});
</script>

<style>
.box {
  position: fixed;
  top: 50px;
  overflow: auto;
  margin-top: 1rem;
  max-height: 500px;
}

.list {
  overflow: auto;
}
</style>
