<template>
  <q-page class="flex flex-center">
    <div class="q-ma-md">
      <div class="q-ma-xs" style="width: 50vw; max-width: 350px">
        <q-list bordered class="rounded-borders text-primary" v-for="list in data" :key="list">
          <q-expansion-item :label="list.brand.category">
            <div class="text-primary" style="max-width: 250px">
              <q-list>
                <q-item clickable v-ripple v-for="alpha in list.brand.alphabet" :key="alpha">
                  <q-expansion-item :label="alpha.letter">
                    <q-item
                      clickable
                      @click="gotoBrand(brand)"
                      v-ripple
                      v-for="(brand, id) in alpha.brands"
                      :key="id"
                    >
                      <q-item-section>
                        {{ brand }}
                      </q-item-section>
                    </q-item>
                  </q-expansion-item>
                </q-item>
              </q-list>
            </div>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.text-primary {
  color: $primary;
}
</style>

<script>
import store from 'src/store';

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      location: `/#/destination/`,
    };
  },
  methods: {
    gotoBrand(direction) {
      store.dispatch('setCurrentBrandName', direction);
      window.location.replace(`${this.location}${direction}`);
    },
  },
};
</script>
