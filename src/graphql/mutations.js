import gql from "graphql-tag";

export const UserSignIn = gql`
  mutation UserSignIn($input: UserSignInInput!) {
    userSignIn(input: $input) {
      recordId
      record {
        token_type
        expires_in
        access_token
        refresh_token
      }
      status
    }
  }
`;

export const userGroupInviteUser = gql`
  mutation userGroupInviteUser($input: UserGroupInviteUserInput!) {
    userGroupInviteUser(input: $input) {
      status
    }
  }
`;

export const permissionRuleCreate = gql`
  mutation permissionRuleUpdate(
    $id: String!
    $input: PermissionRuleUpdateInput!
  ) {
    permissionRuleUpdate(input: $input, id: $id) {
      recordId
      status
      record {
        id
        author_id
        level
        model_type
        model_id
        config
        owner_id
        owner_type
        created_at
        updated_at
      }
    }
  }
`;
