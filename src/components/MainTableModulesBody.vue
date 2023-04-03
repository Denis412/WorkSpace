<template>
  <tbody>
    <tr v-for="module in modules" :key="module.id">
      <td class="q-pa-md text-center">
        {{ module.property5 }}
      </td>

      <td class="q-pa-md text-center">
        <router-link :to="{ name: 'subject', params:{ id: module.property6.id }}">
          {{ module.property6.fullname.first_name}} {{ module.property6.fullname.last_name }}
        </router-link>
      </td>

      <td class="q-pa-md text-center">
        C {{ module.property7.date }} {{ module.property7.time }}
      </td>

      <td class="q-pa-md text-center">
        До {{ module.property8.date }} {{ module.property8.time }}
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps } from 'vue';

const { modules } = defineProps({
  modules:Array,
});
</script>
