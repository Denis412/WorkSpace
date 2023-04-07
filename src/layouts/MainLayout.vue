<template>
  <q-layout view="hHh Lpr fFf">
    <MainHeader :toggleLeftDrawer="toggleLeftDrawer" title="Space" />

    <MainDrawer v-model="leftDrawerOpen" side="left" title="Список">
      <template #list>
        <TreeMenu :pages="currentSpacePages?.rootPages.data" />
      </template>
    </MainDrawer>

    <q-page-container>
      <pre>{{ error }}</pre>
      <router-view v-slot="{ Component }">
        <keep-alive :key="$route.fullPath">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MainHeader from "src/components/MainHeader.vue";
import MainDrawer from "src/components/MainDrawer.vue";
import MainFooter from "src/components/MainFooter.vue";
import TreeMenu from "src/components/TreeMenu.vue";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { pages } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const leftDrawerOpen = ref(false);

const { result: currentSpacePages, error } = useQuery(pages);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
