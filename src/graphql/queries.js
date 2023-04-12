import gql from "graphql-tag";
import Cookies from "js-cookie";

const currentUserId = Cookies.get("user_id");

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

export const pagesAll = gql`
  query pagesAll {
    pages {
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
          type_id
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
      type_id
      subject {
        id
        user_id
        fullname {
          first_name
          last_name
        }
        email {
          email
        }
        group {
          id
          name
        }
        modules {
          id
          name
        }
        tasks {
          id
          name
        }
      }
    }
  }
`;

export const getResponsibleGroupSubjects = gql`
  query getGroupSubjects {
    get_group(id: "6151953155520787188") {
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
    get_group(id: "1605164073721191913") {
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
        type_id
      }
    }
  }
`;

export const getAllModules = gql`
  query getAllModules {
    paginate_module(page: 1, perPage: 100) {
      data {
        id
        name
        created_at
        level
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
        tasks {
          id
          status
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;

export const getModulesAll = gql`
  query getUserModules {
    paginate_subject(page: 1, perPage: 100) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        modules {
          id
          name
          created_at
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
          tasks {
            id
            status
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;

export const getTasksAll = gql`
  query getTasks {
    paginate_task(page: 1, perPage: 100) {
      data {
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
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;

export const getUserModules = gql`
  query getUserModules {
    paginate_subject(page: 1, perPage: 100, where: { column: "user_id", operator: EQ, value: ${currentUserId} }) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        modules {
          id
          name
          created_at
          responsible {
            id
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
          tasks {
            id
            status
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;

export const getModuleById = gql`
  query getModuleById($module_id: String!) {
    get_module(id: $module_id) {
      id
      name
      created_at
      responsible {
        id
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
      tasks {
        id
        name
        created_at
        description
        executor {
          id
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

export const getUserTasks = gql`
  query getUserTasks {
    paginate_subject(page: 1, perPage: 100, where: { column: "user_id", operator: EQ, value: ${currentUserId} }) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        tasks {
          id
          name
          description
          created_at
          executor {
            id
            fullname {
              first_name
              last_name
            }
          }
          status
          module {
            id
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;

export const getListProperty = gql`
  query getProperty {
    property(id: "952775457880529425") {
      id
      type_id
      author_id
      property_group_id
      data_type
      name
      hint
      description
      label
      order
      required
      system
      unique
      multiple {
        status
        max_number
        button_text
      }
      guarded
      default
      meta
      created_at
      updated_at
    }
  }
`;
