<template>
  <div class="me-diriger">
    <caroussel heigth="20vh" />
    <div class="me-diriger__center">
      <!-- <div class="me-diriger__center__logo"> -->
      <img id="logo" src="../assets/mapIn-logo-1.png" alt="logo" />
      <!-- </div> -->

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
      width: 100%;
      height: 25%;

      & > img {
        width: 65%;
      }
    }

    & #logo {
      width: 65%;
    }

    &__title {
      display: flex;
      justify-content: center;
      padding-bottom: 2vh;
      margin: auto;

      h1 {
        background-color: $background;
        border: 3px solid $secondary;
        color: $primary;
        border-radius: 0.5em;
        padding: 0.7rem;
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
