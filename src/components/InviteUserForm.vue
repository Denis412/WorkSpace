<template>
  <q-btn @click="showForm = true" color="primary">Добавить участника</q-btn>

  <q-dialog v-model="showForm">
    <q-card>
      <q-card-section class="text-h6 text-center">
        Добавление участника
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit">
          <q-input
            v-model="form.email"
            filled
            type="email"
            label="Почта"
            lazy-rules
            :rules="[required]"
          />

          <q-input
            v-model="form.first_name"
            filled
            label="Имя"
            lazy-rules
            :rules="[required]"
          />

          <q-input
            v-model="form.last_name"
            filled
            label="Фамилия"
            lazy-rules
            :rules="[required]"
          />

          <q-btn
            class="w-100p"
            color="primary"
            label="Добавить"
            type="submit"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useQuasar } from "quasar";
import { defineProps, ref, computed } from "vue";
import { useValidators } from "src/use/validators";
import groupApi from "src/sdk/group";

const props = defineProps({
  pageId: String,
  groupId: String,
});

const $q = useQuasar();

const showForm = ref(false);

const form = ref({
  email: "",
  first_name: "",
  last_name: "",
});

const groupId = computed(() => props.groupId);

const { required } = useValidators();

const onSubmit = async () => {
  try {
    await groupApi.userInvite(form.value, props.pageId, groupId.value);

    form.value.first_name = "";
    form.value.last_name = "";
    form.value.email = "";

    $q.notify({
      type: "positive",
      message: "Пользователь добавлен",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
