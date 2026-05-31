import Link from 'next/link'
import React from 'react'

const page = async () => {

  await new Promise((resolve) => setTimeout(resolve, 3000));

  async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    const users = await res.json();
    return users;
  }

  const users = await getUser();

  return (
    <div>
      <h1>User Dashboard</h1>
      <ul>
        <li><Link href="/dashboard/user/1">Profile 1</Link></li>
        <li><Link href="/dashboard/user/2">Profile 2</Link></li>
        <li><Link href="/dashboard/user/3">Profile 3</Link></li>
      </ul>

      <h1>Users</h1>

      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default page
