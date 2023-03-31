<template>
  <q-page class="flex flex-center">
    <!-- <q-btn @click="cl">kjshgsdfgjk</q-btn> -->
  </q-page>
</template>

<script setup>
import { useMutation } from "@vue/apollo-composable";
import { permissionRuleCreate } from "src/graphql/mutations";

const { mutate: inviteGroup } = useMutation(permissionRuleCreate);

const cl = async () => {
  try {
    const { data } = await inviteGroup({
      id: "2636443846587274552",
      input: {
        level: 5,
      },
    });

    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
</script>
