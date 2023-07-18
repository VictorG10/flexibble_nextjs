import { User } from "next-auth";
import { createUser } from "./../lib/actions";
export const getUserQuery = `
query GetUser($email: String!) {
    user(by: { email: $email}) {
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
    }
}
`;

export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
        user {
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUr
            id
        }
    }
}
`;

// 1:40:56
