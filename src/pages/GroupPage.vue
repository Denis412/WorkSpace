<template>
  <q-page v-if="loading" class="flex text-h4 items-center justify-center">
    Загрузка...
  </q-page>

  <q-page v-else class="q-pa-md">
    <div>
      <section class="text-h3 text-center">
        {{ page?.page.title }}
      </section>

      <section class="text-h5">Участники группы</section>

      <!-- <pre>{{ subjects }}</pre> -->

      <MainTable
        class="w-100p q-my-md"
        :columnNames="columnNames"
        :subjects="subjects?.get_group?.subject"
      />

      <div class="flex justify-end">
        <GroupTableForm
          :page-id="page?.page.id"
          :group-id="page?.page.object.id"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { getPage, getGroupSubjects } from "src/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import MainTable from "src/components/MainTable.vue";
import GroupTableForm from "src/components/InviteUserForm.vue";

const route = useRoute();
const id = route.params.id;

const { result: page } = useQuery(getPage, {
  id: id,
});

const subjectId = computed(() => page.value?.page?.object.id);

const { result: subjects, loading } = useQuery(getGroupSubjects, {
  group_id: subjectId,
});

const columnNames = computed(() => {
  const names = ["Имя", "Фамилия", "Email"];

  const page_title = page.value?.page.title;

  if (page_title === "Ответственные") names.push("Модули");
  else if (page_title === "Исполнители") names.push("Задачи");

  return names;
});
</script>

<style lang="scss" scoped></style>
