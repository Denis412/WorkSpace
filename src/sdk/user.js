import {
  useMutation,
  provideApolloClient,
  useQuery,
} from "@vue/apollo-composable";
import { UserSignIn } from "src/graphql/mutations";
import { User } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const { mutate: userSignIn } = useMutation(UserSignIn);
const { refetch: refetchUser } = useQuery(User);

const signIn = async ({ email, password }) => {
  const { data: signedInf, error: signInError } = await userSignIn({
    input: {
      login: email,
      password: password,
    },
  });

  if (signInError) throw signInError;

  sessionStorage.setItem("token", signedInf.userSignIn.record.access_token); // Небезопасно! Надо переделать
  sessionStorage.setItem("refresh", signedInf.userSignIn.record.refresh_token); // Небезопасно! Надо переделать

  const { data: signedUser, error: fetchUserError } = await refetchUser({
    id: signedInf.userSignIn.recordId,
  });

  if (fetchUserError) throw fetchUserError;

  return signedUser.user;
};

const userApi = { signIn };

export default userApi;
