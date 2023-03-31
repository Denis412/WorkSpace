<template>
  <q-layout view="hHh Lpr fFf">
    <MainHeader :toggleLeftDrawer="toggleLeftDrawer" title="Space" />

    <MainDrawer v-model="leftDrawerOpen" side="left" title="Список">
      <template #list>
        <TreeMenu :nodes="tree.nodes" :depth="0" :label="tree.label" />
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
import TreeMenu from "src/components/TreeMenu.vue";

const leftDrawerOpen = ref(false);

let tree = ref({
  label: "root",
  nodes: [
    {
      label: "item1",
      nodes: [
        {
          label: "item1.1",
        },
        {
          label: "item1.2",
          nodes: [
            {
              label: "item1.2.1",
            },
          ],
        },
      ],
    },
    {
      label: "item2",
    },
  ],
});

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
