<template>
  <q-layout view="hHh Lpr fFf" class="bg">
    <MainHeader :toggleLeftDrawer="toggleLeftDrawer" title="Space" />

    <MainDrawer  v-model="leftDrawerOpen" side="left" title="Список" class="bg">
      <template  #list>
        <TreeMenu :pages="currentSpacePages?.rootPages.data" />
      </template>
    </MainDrawer>

    <q-page-container>
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
import { provide, ref } from "vue";
import MainHeader from "src/components/MainHeader.vue";
import MainDrawer from "src/components/MainDrawer.vue";
import MainFooter from "src/components/MainFooter.vue";
import TreeMenu from "src/components/TreeMenu.vue";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { pages } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";
import { onMounted } from "vue";
import stompApi from "src/sdk/stomp";

provideApolloClient(apolloClient);

const leftDrawerOpen = ref(false);

const { result: currentSpacePages, refetch: refetchPages } = useQuery(pages);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

provide("updatePages", refetchPages);

onMounted(() => {
  stompApi.queueCreate().then((result) => {});
  stompApi.stompConnect();
});
</script>

<style lang="scss">
@import "../css/theme.scss";

.bg {
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
