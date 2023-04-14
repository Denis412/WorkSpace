<template>
  <q-header elevated class="bg">
    <q-toolbar class="flex justify-between">
      <div class="flex">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </div>

      <div class="flex items-center">
        <div class="q-pa-md">
          <q-toggle v-model="value" color="pink-3" v-on:click="themeHandler" />
        </div>

        <router-link :to="{ name: 'auth' }" class="flex link text-white">
          <q-btn label="Войти" class="bg-green-5" />
        </router-link>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { Cookies } from "quasar";
import UserAvatarButton from "./UserAvatarButton.vue";
import { ref } from "vue";
import { useQuasar } from "quasar";

const currentUser = Cookies.get("user_id");

const { toggleLeftDrawer, title } = defineProps({
  toggleLeftDrawer: Function,
  title: String,
});

const value = ref(false);

const themeHandler = () => {
  if (value.value === true) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
};
</script>

<style lang="scss">
.bg-dark {
  background-color: #222;
  color: #fff;
}
.bg-light {
  background-color: #fff;
  color: #222;
}
</style>
