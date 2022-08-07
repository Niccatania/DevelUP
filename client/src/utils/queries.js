import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      projects {
        _id
        services {
          _id
          name
          description
          price
        }
      }
    }
  }
`;
export const QUERY_ALL_SERVICES= gql`
  {
    services {
      _id
      name
      description
      price
      developer {
        _id
        name
      }
    }
  }
`;