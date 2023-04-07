import {
  useMutation,
  provideApolloClient,
  useQuery,
} from "@vue/apollo-composable";
import { UserSignIn } from "src/graphql/mutations";
import { User, pages } from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";
import Cookies from "js-cookie";

provideApolloClient(apolloClient);

const { mutate: userSignIn } = useMutation(UserSignIn);
const { refetch: refetchUser } = useQuery(User);
const { refetch: refetchPages } = useQuery(pages);

const signIn = async (form) => {
  const { data: signedInf, error: signInError } = await userSignIn({
    input: {
      login: form.email,
      password: form.password,
    },
  });

  if (signInError) throw signInError;

  console.log(signedInf.userSignIn.record.access_token);

  Cookies.set("token", signedInf.userSignIn.record.access_token);

  const { data: signedUser, error: fetchUserError } = await refetchUser({
    id: signedInf.userSignIn.recordId,
  });

  refetchPages();

  if (fetchUserError) throw fetchUserError;

  return signedUser.user;
};

const userApi = { signIn };

export default userApi;
