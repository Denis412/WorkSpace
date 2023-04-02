<template>
 <Table
 :loading="loading"
 :title="page?.page?.title"
 :description="subjects?.get_group?.description"
 :subjects="subjects?.get_group?.subject"
 :linkPath="'subject'"
 :pageId="page?.page?.id"
 :groupId="page?.page?.object.id"
 />
</template>

<script setup>
import Table from "src/components/GroupTable.vue"
import {watch,computed} from 'vue';
import { getPage,getGroupSubjects } from "src/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const { result: page } = useQuery(getPage,{
  id:id
});

const subjectId = computed(()=>page.value?.page?.object.id);

const { result: subjects,loading } = useQuery(getGroupSubjects, {
  group_id: subjectId,
});
</script>

<style lang="scss" scoped>

</style>
