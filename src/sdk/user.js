import { useMutation, provideApolloClient } from "@vue/apollo-composable";
import { UserSignIn } from "src/graphql/mutations";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const { mutate: userSignIn } = useMutation(UserSignIn);

const signIn = async ({ email, password }) => {
  const { error } = await userSignIn({
    input: {
      login: email,
      password: password,
    },
  });

  if (error) throw error;
};

const userApi = { signIn };

export default userApi;
