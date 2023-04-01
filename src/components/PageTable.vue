<template>
  <div class="q-pa-lg">
    <div class="text-h3 q-mb-md">
      {{ props.title }}
    </div>

    <div class="text-h5 q-mb-lg">
      {{ props.description }}
    </div>

    <q-list class="row wrap">
      <q-item class="col-3 column">
        <div class="text-h6 text-bold q-mb-lg" v-if="props.subjects?.length">
          Участники
        </div>

        <div
          class="q-mb-lg"
          v-for="subject in props.subjects"
          :key="subject.id"
        >
          <router-link :to="{ name: linkPath, params: { id: subject.id } }">
            {{ subject.fullname.first_name + " " + subject.fullname.last_name }}
          </router-link>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  description: String,
  subjects: Array,
  linksName: Array,
  linkPath: String,
});
</script>

<style lang="scss" scoped></style>
