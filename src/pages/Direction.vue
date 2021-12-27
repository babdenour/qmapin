<template>
  <div class="me-diriger">
    <caroussel heigth="20vh" />
    <div class="me-diriger__center">
      <div class="me-diriger__center__logo">
        <img
          style="width: 90vw; margin: -0.7rem 0; align-items: center"
          id="logo"
          src="../assets/mapIn-logo-1.png"
          alt="logo"
        />
      </div>

      <div class="me-diriger__center__title">
        <h1>
          <q-btn
            flat
            style="
              padding: 0.7rem;
              font-weight: 700;
              font-size: 1.5rem;
              margin: 0;
              text-align: center;
              vertical-align: center;
            "
            label="me diriger"
            color="background"
            @click="confirm = true"
          />
        </h1>
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <span style="font-size: 2rem" class="q-ml-sm">Informations utiles</span>
            </q-card-section>
            <UserInfo />
          </q-card>
        </q-dialog>
      </div>
    </div>
    <caroussel style="position: fix; bottom: -3.7rem" heigth="20vh" />
  </div>
</template>

<style lang="scss" scoped>
.me-diriger {
  height: 100%;
  width: 100%;

  &__center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__title {
      width: 45vw;
      height: 20vw;
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: center;
      background-color: $background;
      color: $primary;
      border: 4px solid $secondary;
      border-radius: 2rem;
    }
  }
}
</style>

<script>
import { ref } from 'vue';
import Caroussel from '../components/CarousselPub.vue';
import UserInfo from '../components/UserInfo.vue';

export default {
  name: 'Direction',
  components: {
    Caroussel,
    UserInfo,
  },

  data() {
    return {
      revele: false,
    };
  },
  setup() {
    return {
      confirm: ref(false),
    };
  },
  methods: {},
};
</script>
