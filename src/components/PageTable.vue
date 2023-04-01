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
        <div class="q-mb-lg" v-for="subject in props.subjects" :key="subject.id">
          <router-link :to="{name:linkPath,params:{id:subject.id}}">
            {{subject.fullname.first_name+' '+subject.fullname.last_name}}
          </router-link>
        </div>
      </q-item>
    </q-list>
    <q-btn @click="showForm=true">
      Добавить участника
    </q-btn>
    <q-dialog
      v-model="showForm"
    >
      <q-card style="max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Форма добавления участника</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="onSubmit">
            <q-input v-model="form.email" filled type="email" label="Почта"/>
            <q-input v-model="form.first_name" filled label="Имя"/>
            <q-input v-model="form.last_name" filled label="Фамилия"/>
            <q-btn
            label="Добавить участника"
            type="submit"/>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { useMutation } from '@vue/apollo-composable';
import { userGroupInviteUser } from 'src/graphql/mutations';
import {defineProps,ref} from 'vue';
const props = defineProps({
  title: String,
  description: String,
  subjects:Array,
  linksName:Array,
  linkPath:String,
  pageId: String
})

const showForm=ref(false);

const form=ref({
  email:'',
  first_name:'',
  last_name:''
})

const { mutate: inviteUser } = useMutation(userGroupInviteUser);
console.log(props.pageId)


const onSubmit = async () => {
  try {
    const { data } = await inviteUser({
      "input": {
        "name": form.value.first_name,
        "surname": form.value.last_name,
        "email": form.value.email,
        "page_group_id": props.pageId
	    }
    });

    form.value.first_name='';
    form.value.last_name='';
    form.value.email='';
    // $q.notify({
    //   type: "positive",
    //   message: "Товар добавлен",
    // });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>

</style>
