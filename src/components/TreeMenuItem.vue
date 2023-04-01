<template>
  <q-item class="q-pa-none column">
    <q-item
      clickable
      class="cursor-pointer rounded-borders q-pa-sm flex items-center"
    >
      <div>
        <q-icon v-if="page.icon" :name="page.icon" />
        {{ page.title }}
      </div>
    </q-item>

    <q-item-section class="ml-md" v-if="isSubjects || isChildrens">
      <SubjectsList v-if="isSubjects" :subjects="subjects?.get_group.subject" />

      <TreeMenu v-if="isChildrens" :pages="page.children?.data" />
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
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getGroupSubjects } from "src/graphql/queries";
import { ref } from "vue";
import TreeMenu from "./TreeMenu.vue";
import SubjectsList from "./SubjectsList.vue";

const { page } = defineProps({
  page: Object,
});

const { result: subjects } = useQuery(getGroupSubjects, {
  group_id: page?.object?.id,
});

const isSubjects = computed(() => subjects.value?.get_group.subject.length);
const isChildrens = computed(() => page.children?.data.length);
let arrowName = ref("keyboard_arrow_right");

let isOpen = ref(false);
function openHandler() {
  isOpen.value = !isOpen.value;
  arrowName.value = isOpen.value
    ? "keyboard_arrow_down"
    : "keyboard_arrow_right";
}
</script>
