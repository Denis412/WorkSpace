<template>
  <q-header elevated>
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

      <router-link :to="{ name: 'auth' }" class="flex link text-white">
        <q-btn label="Войти" />
      </router-link>

      <!-- <UserAvatarButton v-else /> -->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { Cookies } from "quasar";
import UserAvatarButton from "./UserAvatarButton.vue";

const currentUser = Cookies.get("user_id");

const { toggleLeftDrawer, title } = defineProps({
  toggleLeftDrawer: Function,
  title: String,
});
</script>
