<template>
  <div class="me-diriger">
    <caroussel heigth="20vh" />
    <div class="me-diriger__center">
      <div class="me-diriger__center__logo">
        <img id="logo" src="../assets/mapIn-logo-1.png" alt="logo" />
      </div>

      <div class="me-diriger__center__title">
        <h1 @click="goto">me diriger</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.me-diriger {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;

    &__logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > img {
        width: 40rem;
        margin: -10rem 0;
      }
    }

    &__title {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: top;

      h1 {
        margin: 0;
        padding: 0.7rem;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        background-color: $background;
        color: $primary;
        border: 4px solid $secondary;
        border-radius: 0.5em;
      }

      h1:hover {
        border: 3px solid $primary;
        background-color: $secondary;
        color: $background;
      }

      h1:active {
        background-color: $background;
        color: $primary;
      }
    }
  }
}
</style>

<script>
import Caroussel from '../components/CarousselPub.vue';

export default {
  name: 'Direction',
  components: {
    Caroussel,
  },

  data() {
    return {
      revele: false,
    };
  },
  setup() {
    return {};
  },
  methods: {
    toggleModale() {
      this.revele = !this.revele;
    },
    goto() {
      window.location.replace(`/`);
    },
  },
};
</script>
