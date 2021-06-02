import React, { useEffect, useState } from 'react';
import { withAuthorization } from '../../components/Context';

const UserList = (props) => {
  const { users } = props;

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.uid}>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>Email:</strong> {user.email}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const AdminPage = (props) => {
  const { firebase } = props;
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...users[key],
        uid: key,
      }));
      setUsers(usersList);
      setLoading(false);
    });

    return () => firebase.users().off();
  }, []);

  return (
    <div>
      <h1>Admin</h1>

      {loading && <div>Loading...</div>}

      <UserList users={users} />
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AdminPage);
