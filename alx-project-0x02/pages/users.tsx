import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-purple-50 p-6 flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold text-purple-700">Users Info</h1>
        {users.length === 0 ? (
          <p className="text-gray-600">Loading users...</p>
        ) : (
          users.map(user => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}

      </div>
    </>
  );
}


// Static generation at build time
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
