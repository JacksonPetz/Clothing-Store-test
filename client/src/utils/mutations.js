import gql from 'graphql-tag';

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
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($clothes: [ID]!) {
        addOrder(clothes: $clothes) {
            purchaseDate
            clothes {
                _id
                name
                description
                price
                category {
                    name
                  }
                customize {
                    size
                    brand
                    color
                } 
            }
        }
    }
`;