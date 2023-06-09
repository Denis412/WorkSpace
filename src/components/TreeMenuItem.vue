<template>
  <q-item
    class="q-pa-none column"
    :key="modules"
    v-if="subjectModules || page.object.type_id != modulesType_id || isOwner"
  >
    <router-link :to="{ name: routeName(), params: { id: page.id } }">
      <q-item
        clickable
        class="cursor-pointer rounded-borders q-pa-sm flex items-center"
      >
        <div class="flex">
          <q-icon
            @click.prevent="toggleShowChildren"
            :class="dropDownIconClass"
            v-if="isChildrens"
            name="keyboard_arrow_right"
          />

          <q-icon v-else class="text-h6" />

          <q-icon v-if="page.icon" :name="page.icon" class="text-h6" />
          <q-icon v-else class="text-h6" name="assignment" />

          <div class="flex items-center q-ml-sm">
            {{ page.title }}
          </div>
        </div>
      </q-item>
    </router-link>

    <q-item-section :class="childrenItemsClass">
      <div>
        <TreeMenu
          v-show="isChildrens"
          :modules="modules"
          :pages="page.children?.data"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getGroupSubjects } from "src/graphql/queries";
import TreeMenu from "./TreeMenu.vue";
import { Cookies } from "quasar";

const { page, modules } = defineProps({
  page: Object,
  modules: Array,
});

const { result: subjects } = useQuery(getGroupSubjects, {
  group_id: page?.object?.id,
});

const modulesType_id = ref(process.env.MODULE_ID);
const isOwner = inject("isOwner");

const subjectModules = computed(() => {
  const moduless = modules?.reduce((modulesArr, subject) => {
    modulesArr.push(...subject.modules);

    return modulesArr;
  }, []);

  const module = moduless?.find((el) => el.id === page.object.id);

  return module
    ? module.responsible.user_id === parseFloat(Cookies.get("user_id"))
    : false;
});

const showChildren = ref(false);

const isChildrens = computed(() => page.children?.data.length);

const dropDownIconClass = computed(() =>
  isChildrens.value && showChildren.value
    ? "icon text-h6 drop-down-icon-rotated"
    : "icon text-h6 drop-down-icon"
);
const childrenItemsClass = computed(() =>
  isChildrens.value && showChildren.value
    ? "ml-md children-wrapper-expanded"
    : "ml-md children-wrapper-collapsed"
);

const toggleShowChildren = () => {
  showChildren.value = !showChildren.value;
};

const routeName = () =>
  page.object?.type_id === subjects.value?.get_group.type_id ? "group" : "page";
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #000;
}

.children-wrapper {
  overflow: hidden;
}

.children-wrapper-collapsed {
  @extend .children-wrapper;
  max-height: 0;
  transition: max-height 0.35s ease-out;
}

.children-wrapper-expanded {
  @extend .children-wrapper;
  max-height: 999px;
  transition: max-height 0.67s ease-in;
}

.drop-down-icon {
  transition: transform 0.37s ease-in;
}

.drop-down-icon-rotated {
  transition: transform 0.37s ease-out;
  transform: rotate(90deg);
}
</style>
