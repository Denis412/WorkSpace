<template>
  <q-layout view="hHh Lpr fFf">
    <MainHeader :toggleLeftDrawer="toggleLeftDrawer" title="Space" />

    <MainDrawer v-model="leftDrawerOpen" side="left" title="Список">
      <template #list>
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
import { onUnmounted, provide, ref } from "vue";
import MainHeader from "src/components/MainHeader.vue";
import MainDrawer from "src/components/MainDrawer.vue";
import MainFooter from "src/components/MainFooter.vue";
import TreeMenu from "src/components/TreeMenu.vue";
import {
  provideApolloClient,
  useQuery,
  useMutation,
} from "@vue/apollo-composable";
import { pages } from "src/graphql/queries";
import { createQueue } from "src/graphql/mutations";
import apolloClient from "src/apollo/apollo-client";
import { onMounted } from "vue";
import stompApi from "src/sdk/stomp";
import { Cookies } from "quasar";

provideApolloClient(apolloClient);

const leftDrawerOpen = ref(false);
const isOwner = ref(Cookies.get("user_id") === process.env.OWNER_ID);

const { result: currentSpacePages, refetch: refetchPages } = useQuery(pages);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

provide("updatePages", refetchPages);
provide("isOwner", isOwner);

stompApi.queueCreate();

onMounted(() => {
  if (!Cookies.get("queue")) stompApi.queueCreate();

  stompApi.stompConnect();
});

onUnmounted(() => {
  Cookies.set("queue", null);
});
</script>
