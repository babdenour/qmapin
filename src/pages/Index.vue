<template>
  <List :data="ListTotal" class="q-pa-sm" />
</template>

<script>
import { defineComponent } from 'vue';
import ListTotal from 'src/utils/listTotal';
import List from 'components/List.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    List,
  },
  data() {
    return {
      ListTotal,
    };
  },
});
</script>
