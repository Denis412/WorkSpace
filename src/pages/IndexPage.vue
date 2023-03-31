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
    // const { data } = await inviteGroup({
    //   id: "8163715384260902784",
    // });
    const { data } = await inviteGroup({
      input: {
        model_type: "page",
        model_id: "7077578782196173015",
        owner_type: "group",
        owner_id: "5983896088280179804",
        level: 7,
      },
    });

    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
</script>
