<template>
  <div class="q-pa-md" style="max-width: 300px">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-input
        ref="nameRef"
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="nameRules"
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
        label="Your birthdate *"
        v-model="date"
        mask="date"
        :rules="['date']"
        hint="Your birthdate"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
              <q-date v-model="date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

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

    const name = ref(null);
    const nameRef = ref(null);

    const age = ref(null);
    const ageRef = ref(null);

    const accept = ref(false);
    const submitResult = ref([]);

    return {
      date: ref('2019/02/01'),

      name,
      nameRef,
      nameRules: [(val) => (val && val.length > 0) || 'Please type something'],

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
          sex: 'mal | femel',
          age: Number,
          email: 'test@test.com',
        };
        axios
          .post('', userInfo)
          // eslint-disable-next-line no-return-assign
          .then((response) => (this.userInfoId = response.data.id))
          .catch((error) => {
            this.errorMessage = error.message;
            // eslint-disable-next-line no-console
            console.error('There was an error!', error);
          });
        // eslint-disable-next-line no-console
        console.log('ici');
      },

      onSubmit() {
        nameRef.value.validate();
        ageRef.value.validate();

        if (nameRef.value.hasError || ageRef.value.hasError) {
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
        name.value = null;
        age.value = null;

        nameRef.value.resetValidation();
        ageRef.value.resetValidation();
      },
    };
  },
  methods: {
    goto() {
      window.location.replace(`/`);
    },
  },
};
</script>
