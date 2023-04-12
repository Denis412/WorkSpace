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

export const createModule = gql`
  mutation ($input: create_module_input!) {
    create_module(input: $input) {
      status
      recordId
      record {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        name
        responsible {
          id
          user_id
          fullname {
            first_name
            last_name
          }
        }
        startdate {
          date
          time
        }
        expirationdate {
          date
          time
        }
      }
    }
  }
`;

export const createTask = gql`
  mutation ($input: create_task_input!) {
    create_task(input: $input) {
      status
      recordId
      record {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        name
        description
        executor {
          id
          user_id
          fullname {
            first_name
            last_name
          }
        }
        module {
          id
        }
      }
    }
  }
`;

export const createPermissionRule = gql`
  mutation permissionRuleCreate($input: PermissionRuleCreateInput!) {
    permissionRuleCreate(input: $input) {
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

export const updateTask = gql`
  mutation ($id: String!, $input: update_task_input!) {
    update_task(id: $id, input: $input) {
      status
      recordId
      record {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        name
        description
        executor {
          id
          user_id
          fullname {
            first_name
            last_name
          }
        }
        status
      }
    }
  }
`;

export const updatePage = gql`
  mutation updatePage($id: String!, $input: PageUpdateInput!) {
    pageUpdate(id: $id, input: $input) {
      recordId
      record {
        parent_id
        page_type
        title
        content
        icon
        level
        is_public
        is_block
        position
        config
        created_at
        updated_at
      }
      status
    }
  }
`;

export const createPage = gql`
  mutation ($input: PageCreateInput!) {
    pageCreate(input: $input) {
      recordId
      status
      record {
        parent_id
        page_type
        title
        content
        icon
        level
        is_public
        position
        config
        created_at
        updated_at
        object {
          id
          type_id
        }
      }
    }
  }
`;

export const updateModule = gql`
  mutation ($input: update_module_input!, $id: String!) {
    update_module(id: $id, input: $input) {
      status
      recordId
      record {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        name
      }
    }
  }
`;

export const deleteModule = gql`
  mutation deleteModule($module_id: String!) {
    delete_module(id: $module_id) {
      recordId
    }
  }
`;

export const deleteTask = gql`
  mutation deleteTask($task_id: String!) {
    delete_task(id: $task_id) {
      recordId
    }
  }
`;

export const deletePage = gql`
  mutation deletePage($page_id: String!) {
    pageDelete(id: $page_id) {
      recordId
    }
  }
`;

export const createQueue = gql`
  mutation {
    notificationSubscribe {
      hash
    }
  }
`;

export const filesUpload = gql`
  mutation filesUpload($files: [Upload]!) {
    filesUpload(files: $files) {
      status
      ids
    }
  }
`;
