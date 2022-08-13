import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;
export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const ADD_PROJECT = gql`
  mutation addProject($title: String!, $description: String!, $services: [String]) {
    addProject(title: $title, description: $description, services: $services) {
      _id
			title
			status
			description
			dateCreated
    }
  }
`;
