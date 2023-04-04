import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import { createModule, createPage } from "src/graphql/mutations";

provideApolloClient(apolloClient);

const { mutate: creatingModule } = useMutation(createModule);
const { mutate: creatingPage } = useMutation(createPage);

const moduleCreate = async (form) => {
  const { data: createdModule } = await creatingModule({
    input: {
      name: form.name,
      property4: {
        "2529884860175464566": form.responsible.value,
      },
      property5: {
        date: new Date(form.date_start).toLocaleDateString(),
        time: "01:00:00",
      },
      property6: {
        date: new Date(form.date_end).toLocaleDateString(),
        time: "23:58:00",
      },
    },
  });

  const { data: createdPage } = await creatingPage({
    input: {
      title: createdModule.create_type2.record.name,
      parent_id: "1107262131192288825",
      object: {
        id: createdModule.create_type2.record.id,
        type_id: createdModule.create_type2.record.type_id,
      },
    },
  });

  return { createdModule, createdPage };
};

const moduleUpdate = () => {};

const moduleApi = { moduleCreate, moduleUpdate };

export default moduleApi;
