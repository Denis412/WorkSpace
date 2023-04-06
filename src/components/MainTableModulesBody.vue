<template>
  <tbody>
    <tr v-for="module in modules.property4" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.name }}
      </td>

      <!-- <td class="q-pa-md text-center">
        <router-link :to="{ name: 'subject', params: { id: module.id } }">
          {{ module.property4.fullname.first_name }}
          {{ module.property4.fullname.last_name }}
        </router-link>
      </td> -->

      <td class="q-pa-md text-center">
        C {{ module.property5.date }} {{ module.property5.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.property6.date }} {{ module.property6.time }}
      </td>

      <td class="q-pa-md text-center">
        {{ module.property7 }}
      </td>
      <ModuleAction :module="module" />
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps, inject } from "vue";
import ModuleAction from "./ModuleAction.vue";
const { modules } = defineProps({
  modules: Object,
});
</script>
