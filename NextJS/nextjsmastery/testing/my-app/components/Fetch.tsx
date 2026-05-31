// app/users/page.tsx

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>

      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}