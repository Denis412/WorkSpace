<template>
  <q-item class="q-pa-none column">
    <router-link :to="{ name: 'page', params: { id: page.id } }">
      <q-item
        clickable
        class="cursor-pointer rounded-borders q-pa-sm flex items-center"
      >
        <div>
          <q-icon
            @click.prevent="toggleShowChildren"
            class="icon text-h6"
            v-if="isSubjects || isChildrens"
            :name="arrowType"
          />

          <q-icon v-if="page.icon" :name="page.icon" />

          {{ page.title }}
        </div>
      </q-item>
    </router-link>

    <!-- <pre>{{ subjects?.get_group.subject }}</pre> -->

    <q-item-section
      :class="childrenItemsClass"
    >
      <div>
        <SubjectsList v-show="isSubjects" :subjects="subjects?.get_group.subject" />
        <TreeMenu v-show="isChildrens" :pages="page.children?.data" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getGroupSubjects } from "src/graphql/queries";
import TreeMenu from "./TreeMenu.vue";
import SubjectsList from "./SubjectsList.vue";

const { page } = defineProps({
  page: Object,
});

const { result: subjects } = useQuery(getGroupSubjects, {
  group_id: page?.object?.id,
});

const arrowType = ref("keyboard_arrow_right");
const showChildren = ref(false);

const isSubjects = computed(() => subjects.value?.get_group.subject.length);
const isChildrens = computed(() => page.children?.data.length);
const childrenItemsClass = computed(() => (isSubjects.value || isChildrens.value) && showChildren.value ? "ml-md children-wrapper-expanded" : "ml-md children-wrapper-collapsed");

const toggleShowChildren = () => {
  showChildren.value = !showChildren.value;

  arrowType.value = showChildren.value
    ? "keyboard_arrow_down"
    : "keyboard_arrow_right";

  console.log(childrenItemsClass);
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #000;
}

.children-wrapper-collapsed {
  max-height: 0;
  overflow: hidden;
  transition: max-height .37s ease-out;
}

.children-wrapper-expanded {
  max-height: 500px;
  transition: max-height .37s ease-in;
  overflow: hidden;
}
</style>
