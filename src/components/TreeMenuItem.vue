<template>
  <q-item class="q-pa-none column">
    <q-item-section
      class="cursor-pointer hover-menu-item rounded-borders q-pa-sm"
    >
      <div>
        <q-icon :name="page.icon" />
        {{ page.title }}
      </div>
    </q-item-section>

    <q-item-section class="ml-md" v-if="validLengths">
      <SubjectsList :subjects="subjects?.get_group?.subject" />

      <TreeMenu :pages="page?.children?.data" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getGroupSubjects } from "src/graphql/queries";
import TreeMenu from "./TreeMenu.vue";
import SubjectsList from "./SubjectsList.vue";

const { page } = defineProps({
  page: Object,
});

const { result: subjects } = useQuery(getGroupSubjects, {
  group_id: page?.object?.id,
});

const validLengths = computed(
  () =>
    subjects?.value?.get_group?.subject.length || page?.children?.data.length
);
</script>
