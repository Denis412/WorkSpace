<template>
  <q-layout view="hHh Lpr fFf">
    <MainHeader :toggleLeftDrawer="toggleLeftDrawer" title="Space" />

    <MainDrawer v-model="leftDrawerOpen" side="left" title="Список">
      <template #list>
        <!-- Место для контентента -->
      </template>
    </MainDrawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import MainHeader from "src/components/MainHeader.vue";
import MainDrawer from "src/components/MainDrawer.vue";
import MainFooter from "src/components/MainFooter.vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
