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

    <q-item-section class="ml-md">
      <SubjectsList :subjects="subjects?.get_group?.subject" />

      <TreeMenu :pages="page?.children?.data" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { getGroupSubjects } from "src/graphql/queries";
import { watch } from "vue";
import TreeMenu from "./TreeMenu.vue";
import SubjectsList from "./SubjectsList.vue";

const { page } = defineProps({
  page: Object,
});

const { result: subjects, refetch: refetchSubjects } = useQuery(
  getGroupSubjects,
  {
    group_id: page?.object?.id,
  }
);

watch(page, async (value) => {
  if (!value) return;

  const { data } = await refetchSubjects({
    group_id: value?.object?.id,
  });

  console.log(data);
});
</script>
