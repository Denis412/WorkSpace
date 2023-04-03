<template>
  <div class="q-pa-lg">
    <q-skeleton width="300px" height="100px" type="text" v-if="loading" />

    <div v-else class="text-h3">
      {{ props.title }}
    </div>

    <q-skeleton height="200px" v-if="loading" />

    <q-list v-else class="row wrap">
      <SubjectTableItem :tableItem="props.groups" :name="'Группы'" />

      <SubjectTableItem
        :tableItem="props.information"
        :name="'Общая информация'"
      />
    </q-list>
  </div>
</template>

<script setup>
import SubjectTableItem from "src/components/SubjectTableItem.vue";

const props = defineProps({
  title: String,
  groups: Array,
  information: Array,
  loading: Boolean,
});
</script>

<style lang="scss" scoped></style>
