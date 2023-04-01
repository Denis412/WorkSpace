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
  mutation ($input: create_type1_input!) {
    create_type1(input: $input) {
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
        property5
        property6 {
          id
          user_id
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
          name
          property2
          property3 {
            fullname {
              first_name
              last_name
            }
          }
        }
      }
    }
  }
`;
// Создание модуля
// {
//   "input": {
//       "name": "Модуль1",
//     "property5": "Модуль1",
//     "property6": {
//       "6227464153175039134": "6880455107833567813"
//     },
//     "property7": {
//       "date": "",
//       "time": ""
//     },
//     "property8": {
//       "date": "",
//       "time": ""
//     }
//   }
// }

export const createTask = gql`
  mutation ($input: create_type2_input!) {
    create_type2(input: $input) {
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
        property1
        property2
        property3 {
          id
          user_id
          fullname {
            first_name
            last_name
          }
        }
        property4
        property9 {
          id
          name
          property6 {
            id
            fullname {
              first_name
              last_name
            }
          }
        }
      }
    }
  }
`;

// Создание задачи
// {
//   "input": {
//     "name": "Задача1",
//     "property1": "Задача1",
//     "property2": "Сделать что-то",
//     "property3": {
//       "6227464153175039134": "5934844511820789843"
//     },
//     "property4": "4827681319781020453"
//   }
// }
