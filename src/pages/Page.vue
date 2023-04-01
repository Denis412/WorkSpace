<template>
  <MainTable :subjects="subjects?.get_group?.subject" />
</template>

<script setup>
import Table from "src/components/PageTable.vue";
import { computed } from "vue";
import { getPage, getGroupSubjects } from "src/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import MainTable from "src/components/MainTable.vue";

const route = useRoute();
const id = route.params.id;

const { result: page } = useQuery(getPage, {
  id: id,
});

const subjectId = computed(() => page.value?.page?.object.id);

const { result: subjects } = useQuery(getGroupSubjects, {
  group_id: subjectId,
});
</script>

<style lang="scss" scoped></style>
