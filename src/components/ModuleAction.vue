<template>
  <q-btn
    v-if="module"
    @click="showForm(module)"
    color="primary"
    label="Изменить"
  />

  <q-btn
    v-else-if="moduleDelete"
    @click="deleteModule"
    color="negative"
    label="Удалить"
    class="q-ml-md"
  />

  <q-btn v-else @click="show = true" color="primary" label="Создать модуль" />

  <q-dialog v-model="show">
    <ModuleForm
      v-if="module"
      class="w-100p"
      @onSubmit="onSubmit"
      :moduleName="'Редактирование модуля'"
      :module="module"
      :btnName="'Изменить'"
    />

    <ModuleForm
      v-else
      class="w-100p"
      @onSubmit="onSubmit"
      :moduleName="'Модуль'"
      :btnName="'Создать'"
    />
  </q-dialog>
</template>

<script setup>
import { defineProps, inject, ref } from "vue";
import ModuleForm from "./ModuleForm.vue";
import moduleApi from "src/sdk/module";

const { module, moduleDelete } = defineProps({
  module: Object,
  moduleDelete: Object,
});

const show = ref(false);

const bufferModule = [];

const showForm = (module) => {
  show.value = true;
  form.value.module_name = module.name;
  form.value.user_name = `${module.responsible.fullname.first_name} ${module.responsible.fullname.last_name}`;
  form.value.date_start = module.startdate.date;
  form.value.date_end = module.expirationdate.date;

  Object.values(form.value).forEach((el) => bufferModule.push(el));
  bufferModule.push(module.id);
};

const form = ref({});

const updatePages = inject("updatePages");
const updateModules = inject("updateModules");

const onSubmit = async (moduleForm) => {
  try {
    module
      ? await moduleApi.moduleUpdate(moduleForm, bufferModule)
      : await moduleApi.moduleCreate(moduleForm);

    updatePages();
    updateModules();
  } catch (error) {
    console.log(error);
  }
};

const deleteModule = async () => {
  try {
    await moduleApi.moduleDelete(moduleDelete.id);

    updatePages();
    updateModules();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
