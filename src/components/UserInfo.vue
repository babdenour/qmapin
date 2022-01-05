<template>
  <div class="q-pa-md" style="max-width: 300px">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-input
        ref="emailRef"
        filled
        v-model="email"
        label="Your email *"
        hint="Email"
        lazy-rules
        :rules="emailRules"
      />

      <q-select
        filled
        v-model="sex"
        :options="sexType"
        label="Your gender *"
        hint="Male or Female"
      />

      <q-input
        filled
        v-model="age"
        mask="##/##/####"
        label="Your birthdate *"
        hint="Your birthdate"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <q-card-actions align="right">
        <q-btn v-close-popup label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Continuer" type="submit" color="white" @click="sendUser()" />
        <!-- <q-btn label="Continuer" color="white" v-close-popup /> -->
      </q-card-actions>
    </form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const $q = useQuasar();

    const sex = ref(null);

    const email = ref(null);
    const emailRef = ref(null);

    const age = ref(null);
    const ageRef = ref(null);

    const accept = ref(false);
    const submitResult = ref([]);

    return {
      email,
      emailRef,
      emailRules: [(val) => (val && val.length > 0) || 'Please type something'],

      sex,
      sexType: ['male', 'female'],

      age,
      ageRef,
      ageRules: [
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 0 && val < 100) || 'Please type a real age',
      ],

      accept,
      submitResult,
      // TODO add post method to the setup for sending info to the back after validation

      sendUser() {
        const userInfo = {
          gender: sex.value,
          age: age.value,
          email: email.value,
        };
        if (accept.value) {
          axios
            .post('http://localhost:3000/user', userInfo)
            // eslint-disable-next-line no-return-assign
            .then((response) => (this.userInfoId = response.data.id))
            .catch((error) => {
              this.errorMessage = error.message;
              // eslint-disable-next-line no-console
              console.error('There was an error!', error);
            });
          setTimeout(1000, window.location.replace(`/`));
        }
      },

      onSubmit() {
        emailRef.value.validate();
        ageRef.value.validate();

        if (emailRef.value.hasError || ageRef.value.hasError) {
          // form has error
        } else if (accept.value !== true) {
          $q.notify({
            color: 'negative',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Submitted',
          });
        }
        // eslint-disable-next-line no-console
        console.log(this.name, this.sex, this.age);
        this.sendUser();
      },

      onReset() {
        email.value = null;
        age.value = null;

        emailRef.value.resetValidation();
        ageRef.value.resetValidation();
      },
    };
  },
};
</script>
