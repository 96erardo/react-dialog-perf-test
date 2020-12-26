import gql from 'graphql-tag';

export const FETCH_TO_DOS = gql`
  query FetchToDos ($filter: ToDoFilter, $first: Int, $skip: Int, $sort: [ToDoSort!]) {
    toDosList (filter: $filter, first: $first, skip: $skip, sort: $sort) {
      count
      items {
        id
        identifier
        title
        description
        finished
        createdAt
      }
    }
  }
`;