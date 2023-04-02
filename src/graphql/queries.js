import gql from "graphql-tag";

export const User = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      current_space_id
      email
      name
      surname
      registration_passed
      socials
      spaces
      avatar
      telegram_chat_id
      updated_at
      created_at
      deleted_at
    }
  }
`;

export const pages = gql`
  query pages {
    rootPages {
      data {
        id
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

        object {
          id
        }
        children {
          data {
            id
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
            object {
              id
              type_id
            }
          }
        }
      }
      paginatorInfo {
        perPage
        count
        total
        currentPage
        from
        to
        lastPage
        hasMorePages
      }
    }
  }
`;

export const getGroupSubjects = gql`
  query getGroupSubjects($group_id: String!) {
    get_group(id: $group_id) {
      id
      author_id
      name
      description
      created_at
      updated_at
      subject {
        fullname {
          first_name
          last_name
        }
        group {
          id
          name
        }
        user_id
        id
      }
    }
  }
`;

export const getResponsibleGroupSubjects = gql`
  query getGroupSubjects {
    get_group(id: "5983896088280179804") {
      id
      author_id
      name
      description
      created_at
      updated_at
      subject {
        fullname {
          first_name
          last_name
        }
        group {
          id
          name
        }
        user_id
        id
      }
    }
  }
`;

export const getExecutorGroupSubjects = gql`
  query getGroupSubjects {
    get_group(id: "5631823475896040655") {
      id
      author_id
      name
      description
      created_at
      updated_at
      subject {
        fullname {
          first_name
          last_name
        }
        group {
          id
          name
        }
        user_id
        id
      }
    }
  }
`;

export const getSubject = gql`
  query getSubject($id: String!) {
    get_subject(id: $id) {
      email {
        email
      }
      group {
        name
        id
      }
      fullname {
        first_name
        middle_name
        last_name
      }
    }
  }
`;

export const getPage = gql`
  query getPage($id: String!) {
    page(id: $id) {
      id
      parent_id
      page_type
      title
      content
      icon
      level
      is_public
      position
      config
      is_block
      created_at
      updated_at
      object {
        id
      }
    }
  }
`;

export const getModuleById = gql`
  query getModuleById($module_id: String!) {
    get_type1(id: $module_id) {
      id
      name
      property6 {
        id
        fullname {
          first_name
          last_name
        }
      }
      property7 {
        date
        time
      }
      property8 {
        date
        time
      }
      property9 {
        id
        name
        property2
        property3 {
          id
          fullname {
            first_name
            last_name
          }
        }
        property4
      }
    }
  }
`;
