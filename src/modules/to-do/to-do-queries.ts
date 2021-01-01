import gql from 'graphql-tag';

const ToDoFragment = gql`
  fragment ToDoFragment on ToDo {
    id
    identifier
    title
    description
    finished
    createdAt
  }
`;

export const FETCH_TO_DOS = gql`
  query FetchToDos ($filter: ToDoFilter, $first: Int, $skip: Int, $sort: [ToDoSort!]) {
    toDosList (filter: $filter, first: $first, skip: $skip, sort: $sort) {
      count
      items {
        ...ToDoFragment
      }
    }
  }
  ${ToDoFragment}
`;

export const CREATE_TO_DO = gql`
  mutation CreateToDo ($data: ToDoCreateInput!) {
    toDoCreate(data: $data) {
      ...ToDoFragment
    }
  }
  ${ToDoFragment}
`;

export const UPDATE_TO_DO = gql`
  mutation UpdateToDo ($filter: ToDoKeyFilter, $data: ToDoUpdateInput!) {
    toDoUpdate(filter: $filter, data: $data) {
      ...ToDoFragment
    }
  }
  ${ToDoFragment}
`;

export const DELETE_TO_DO = gql`
  mutation DeleteToDo ($filter: ToDoKeyFilter, $force: Boolean) {
    toDoDelete (filter: $filter, force: $force) {
      success
    }
  }
`;