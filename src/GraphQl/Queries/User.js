import {gql} from '@apollo/client';

export  const LOAD_USERS = gql`
  query{
    users{
      edges{
        node{
          username
          email
          isActive
          id
          

        }
      }
    }
  }
`;