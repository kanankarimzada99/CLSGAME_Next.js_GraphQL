import { gql } from 'apollo-boost';

export const ADD_CLICK = gql`
  mutation AddClick($type: String!) {
    addClick(type: $type) {
      timestamp
    }
  }
`;
