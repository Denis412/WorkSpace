<template>
  <q-form 
    class="flex column rounded-borders bg-grey-3 justify-between q-pa-md form-width"
    @submit="signIn"
  >
    <header class="text-center text-h6 ">Вход</header>

    <main>
      <q-input
        v-model="form.email"
        type="email"
        label="Email"
        placeholder="Введите email"
      />

      <q-input 
        v-model="form.password"
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        class="q-mt-sm " 
      />
    </main>

    <footer>
      <div class="q-mt-md">
        <q-btn label="Войти" class="bg-green w-100p" type="submit" />
      </div>
    </footer>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import userApi from "src/sdk/user";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const form = ref({
  email: "",
  password: "",
});

const signIn = async () => {
  try {
    const user = await userApi.signIn(form.value);

    store.commit("user/SET_CURRENT_USER", user);

    router.push({
      name: "home",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.form-width {
  width: 500px;
  height: 300px;
}

.auth-form {
  background-color: grey;
}
</style>
