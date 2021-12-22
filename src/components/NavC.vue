<template>
  <div class="nav">
    <div class="nav__btn">
      <router-link to="/direction">
        <img src="../assets/icone-gps.png" alt="gps" />
      </router-link>

      <router-link to="/destination">
        <img src="../assets/icone-liste.png" alt="logo" />
      </router-link>
    </div>
    <div class="nav__autocomplete">
      <div class="q-gutter-md row nav__autocomplete__div">
        <q-select
          borderless
          :model-value="model"
          use-input
          fill-input
          input-debounce="0"
          :options="brandsData"
          @filter="filterFn"
          @input-value="brandsDataSelected"
        >
          <template v-slot:controle>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <!-- <Autocomplete
        :items="brandsData"
        filterby="brands"
        title="🔍"
        @selected="brandsDataSelected" -->
        <!-- /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  max-height: 10vh;
  width: 80vw;
  border-radius: 1rem;
  padding: 0.3rem;
  margin-bottom: 1vh;
  background-color: $background;

  &__btn {
    display: flex;
    flex-direction: row;

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  &__autocomplete {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 3;
  }
}
</style>

<script>
// import Autocomplete from '../components/Autocomplete';
import { ref } from 'vue';
import store from '../store/index';
import dataString from '../utils/data';

const brandsData = dataString.brands;
const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'].reduce((acc, opt) => {
  for (let i = 1; i <= 5; i += 1) {
    acc.push(`${opt} ${i}`);
  }
  return acc;
}, []);

export default {
  name: 'NavC',
  props: ['brandName', 'filterBy'],
  store,
  components: {
    // Autocomplete,
  },

  mounted() {
    this.brandsData = brandsData;
  },

  setup() {
    const model = ref(null);
    const options = ref(stringOptions);

    return {
      model,
      options,

      // eslint-disable-next-line no-unused-vars
      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLocaleLowerCase();
          options.value = stringOptions.filter((v) => v.toLocaleLowerCase().indexOf(needle) > -1);
        });
      },
    };
  },
  data() {
    return {
      location: `/destination/`,
      formData: {
        brandName: '',
      },
      brandsData: [],
    };
  },

  methods: {
    brandsDataSelected(brand) {
      //   console.log(`Brand Selected:\n ${brand}`);
      this.goto(brand);
    },

    goto(name) {
      window.location.replace(`/#${this.location}${name}`);
    },
  },

  watch: {},
};
</script>
