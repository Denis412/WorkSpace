import {
  provideApolloClient,
  useMutation,
  useQuery,
} from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import {
  createModule,
  updateModule,
  createPage,
  deleteModule,
  deletePage,
  createPermissionRule,
  updatePage,
} from "src/graphql/mutations";
import { getUserModules, pagesAll, pages } from "src/graphql/queries";

provideApolloClient(apolloClient);

const { mutate: creatingModule } = useMutation(createModule);
const { mutate: creatingPage } = useMutation(createPage);
const { mutate: creatingPermissionRule } = useMutation(createPermissionRule);

const { mutate: deletingModule } = useMutation(deleteModule);
const { mutate: deletingPage } = useMutation(deletePage);

const { refetch: refetchModules } = useQuery(getUserModules);
const { mutate: updatingModule } = useMutation(updateModule);
const { result: allpages, refetch: allPagesRefetch } = useQuery(pagesAll);
const { mutate: pageUpdate } = useMutation(updatePage);

const { refetch: pagesRefetch } = useQuery(pages);

const moduleCreate = async (form) => {
  const { data: createdModule } = await creatingModule({
    input: {
      name: form.name,
      property4: {
        [process.env.SUBJECT_ID]: form.responsible.value,
      },
      property5: {
        date: new Date(form.date_start).toLocaleDateString(),
        time: "01:00:00",
      },
      property6: {
        date: new Date(form.date_end).toLocaleDateString(),
        time: "23:55:00",
      },
    },
  });

  const { data: createdPage } = await creatingPage({
    input: {
      title: createdModule.create_type2.record.name,
      parent_id: process.env.MODULE_PAGE_ID,
      object: {
        id: createdModule.create_type2.recordId,
        type_id: createdModule.create_type2.record.type_id,
      },
    },
  });

  const { data: createdPermissionRuleForPage } = await creatingPermissionRule({
    input: {
      model_type: "page",
      model_id: createdPage.pageCreate.recordId,
      owner_type: "subject",
      owner_id: form.responsible.value,
      level: 5,
    },
  });

  const { data: createdPermissionRuleForModuleObject } =
    await creatingPermissionRule({
      input: {
        model_type: "object",
        model_id: createdModule.create_type2.recordId,
        owner_type: "subject",
        owner_id: form.responsible.value,
        level: 5,
      },
    });

  await refetchModules();
  await pagesRefetch();
  await allPagesRefetch();

  return {
    createdModule,
    createdPage,
    createdPermissionRuleForPage,
    createdPermissionRuleForModuleObject,
  };
};

const moduleUpdate = async (Moduleform, bufferModule) => {
  const filtredValue = {};

  Object.values(Moduleform).forEach((el, index) => {
    let keyName = Object.keys(Moduleform)[index];

    if (el != bufferModule[index]) filtredValue[keyName] = el;
  });
  const input = {};

  filtredValue.name ? (input.name = filtredValue.name) : null;
  filtredValue.responsible
    ? (input.property4 = {
        [process.env.SUBJECT_ID]: filtredValue.responsible.value,
      })
    : null;
  filtredValue.date_start
    ? (input.property5 = {
        date: new Date(filtredValue.date_start).toLocaleDateString(),
        time:"01:00:00"
      })
    : null;
  filtredValue.date_end
    ? (input.property6 = {
        date: new Date(filtredValue?.date_end).toLocaleDateString(),
        time: "23:55:00"
      })
    : null;

  if (Object.entries(input).length != 0) {
    input.name = Moduleform.name;

    try {
      const { data: moduleData } = await updatingModule({
        id: bufferModule.at(-1),
        input: input,
      });

      if (filtredValue.name) {
        const pageId = allpages.value.pages.data.find(
          (el) => el.object.id === bufferModule.at(-1)
        ).id;
        const { data: pageData } = await pageUpdate({
          id: pageId,
          input: {
            title: input.name,
          },
        });
      }

      await refetchModules();
      await pagesRefetch();
      await allPagesRefetch();
    } catch (error) {
      console.log(error);
    }
  }
};

const moduleDelete = async (moduleId) => {
  const pageId = allpages.value.pages.data.find(
    (el) => el.object.id === moduleId
  )?.id;

  const { data: delM } = await deletingModule({
    module_id: moduleId,
  });

  const { data: delP } = await deletingPage({
    page_id: pageId,
  });

  await refetchModules();
  await pagesRefetch();
  await allPagesRefetch();
};

const moduleApi = { moduleCreate, moduleUpdate, moduleDelete };

export default moduleApi;
