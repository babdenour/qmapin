<template>
  <div class="">
    <!-- TODO finish the stylingof the map -->
    <div class="nav">
      <div class="nav__btn">
        <router-link to="/direction">
          <img src="../assets/icone-gps.png" alt="gps" />
        </router-link>

        <router-link to="/destination">
          <img src="../assets/icone-liste.png" alt="logo" />
        </router-link>
      </div>
      <div class="nav__search">
        <img src="../assets/magnifier.svg" alt="loupe" />
        <q-select
          color="primary"
          borderless
          v-model="model"
          clearable
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          label="Trouvez votre boutique"
          :options="options"
          @filter="filterFn"
          @filter-abort="abortFilterFn"
          @@input="brandsDataSelected(model)"
          style="width: 250px"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  background-color: $background;
  display: flex;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
  width: 80vw;
  border-radius: 1rem;

  &__btn {
    display: flex;
    flex-direction: row;

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  &__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 3px solid $primary;
    border-radius: 0.3rem;
    height: 2.8rem;
    padding: 0.3rem;
    margin: 0.3rem;
    // max-width: 40vw;

    & > img {
      width: 5vw;
      margin-right: 12px;
    }

    &__input {
      height: 2.8rem;
      margin: 0.3rem;
      padding: 0.3rem;
    }
  }
  .text-primary {
    color: $primary;
  }
}
</style>

<script>
import { ref } from 'vue';
import data from 'src/utils/data';

const { brands } = data;
const stringOptions = brands.sort();

export default {
  setup() {
    const options = ref(stringOptions);

    return {
      model: ref(null),
      options,

      filterFn(val, update) {
        // call abort() at any time if you can't retrieve data somehow

        setTimeout(() => {
          update(
            () => {
              if (val === '') {
                options.value = stringOptions;
              } else {
                const needle = val.toLowerCase();
                options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1);
              }
            },

            // "ref" is the Vue reference to the QSelect
            // eslint-disable-next-line no-shadow
            (ref) => {
              if (val !== '' && ref.options.length > 0) {
                ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
              }
            }
          );
        }, 300);
      },

      filterFnAutoselect(val, update) {
        // call abort() at any time if you can't retrieve data somehow

        setTimeout(() => {
          update(
            () => {
              if (val === '') {
                options.value = stringOptions;
              } else {
                const needle = val.toLowerCase();
                options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1);
              }
            },

            // "ref" is the Vue reference to the QSelect
            // eslint-disable-next-line no-shadow
            (ref) => {
              if (val !== '' && ref.options.length > 0 && ref.optionIndex === -1) {
                ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
                ref.toggleOption(ref.options[ref.optionIndex], true); // toggle the focused option
              }
            }
          );
        }, 300);
      },

      abortFilterFn() {
        // console.log('delayed filter aborted')
      },
    };
  },
  methods: {
    brandsDataSelected(brand) {
      // eslint-disable-next-line no-console
      console.log(`Brand Selected:\n ${brand}`);
      this.goto(brand);
    },
    goto(brand) {
      window.location.replace(`/#/destination/${brand}`);
    },
  },
};
</script>
