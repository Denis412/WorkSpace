<template>
  <q-item class="q-pa-none column">
    <router-link :to="{name: routeName(),params:{id:page.id}}">

    <q-item
      clickable
      class="cursor-pointer rounded-borders q-pa-sm flex items-center"
    >
      <div>
        <q-icon v-if="page.icon" :name="page.icon" />
          {{ page.title }}
      </div>
    </q-item>
  </router-link>


    <q-item-section class="ml-md" v-if="isSubjects || isChildrens">
      <SubjectsList v-if="isSubjects" :subjects="subjects?.get_group.subject" />

      <TreeMenu v-if="isChildrens" :pages="page.children?.data" />
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

const isSubjects = computed(() => subjects.value?.get_group.subject.length);
const isChildrens = computed(() => page.children?.data.length);


const routeName = ()=>{
  if(page.object?.type_id===subjects.value?.get_group.type_id)
    return "group";
  else
    return "page";
}
</script>

<style lang="scss">
a{
  text-decoration: none;
  color: #000;
}
</style>
