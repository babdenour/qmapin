<template>
  <div class="nav">
    <div class="nav__autocomplete">
      <div class="q-gutter-sm row nav__autocomplete__div">
        <q-select
          label="Trouve une boutique"
          behavior="menu"
          use-input
          borderless
          input-debounce="0"
          v-model="model"
          :options="options"
          @filter="filterFn"
        >
          <template v-slot:prepend>
            <router-link to="/">
              <img style="width: 50px" src="../assets/icone-liste.png" alt="logo" />
            </router-link>
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
    </div>
    <q-btn style="width: 50px; border-radius: 1rem" @click="goto(model)"
      ><img style="width: 40px" src="../assets/icone-gps.png" alt="gps"
    /></q-btn>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  max-height: 7vh;
  width: 85vw;
  border-radius: 1rem;
  padding: 1%;
  background-color: $background;
  display: flex;
  flex-direction: row;

  &__autocomplete {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-grow: 3;
  }
}
</style>

<script>
import { ref } from 'vue';
import store from '../store/index';
import dataString from '../utils/data';

const brandsData = dataString.brands;
const stringOptions = brandsData;

export default {
  name: 'NavC',
  store,
  components: {},

  mounted() {
    this.brandsData = brandsData;
  },

  setup() {
    const model = ref(null);
    const options = ref(stringOptions);

    return {
      model,
      options,

      filterFn(val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions;
          });
          return;
        }
        update(() => {
          const needle = val.toLocaleLowerCase();
          options.value = stringOptions.filter((v) => v.toLocaleLowerCase().indexOf(needle) > -1);
        });
      },
    };
  },
  data() {
    return {
      location: `/#/destination/`,
      brandName: '',
      brandsData: [],
    };
  },

  methods: {
    goto(direction) {
      if (direction) {
        store.dispatch('setCurrentBrandName', direction);
        window.location.replace(`${this.location}${direction}`);
      }
    },
  },

  watch: {},
};
</script>
