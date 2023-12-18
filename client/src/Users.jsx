import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
query Query {
  users {
    _id
    email
    name
    password
  }
}
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }

  return (
    <div>
      {/* <h1>Users Coming Soon!...Like right now!</h1> */}
      {/* {data.users.map((user) => ( */}
        {/* <p key={user._id}> */}
          {/* Name: {user.name} <br></br> */}
          {/* Email: {user.email} */}
        {/* </p> */}
      {/* ))} */}
    </div>
  );
};

export default Users;