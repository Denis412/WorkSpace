<template>
  <q-item class="q-pa-none column">
    <q-item-section class="cursor-pointer hover-item rounded-borders q-pa-sm">
      <div>
        <q-icon
          v-on:click="openHandler()"
          class="icon"
          v-if="page?.children?.data?.length > 0"
          :name="arrowName"
        />
        {{ page.title }}
      </div>
    </q-item-section>

    <q-item-section class="ml-md" v-if="page?.children?.data.length && isOpen">
      <TreeMenu :pages="page?.children?.data" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref } from "vue";
import TreeMenu from "./TreeMenu.vue";

const { page } = defineProps({
  page: Object,
});

let arrowName = ref("keyboard_arrow_right");

let isOpen = ref(false);
function openHandler() {
  isOpen.value = !isOpen.value;
  arrowName.value = isOpen.value
    ? "keyboard_arrow_down"
    : "keyboard_arrow_right";
}
</script>
