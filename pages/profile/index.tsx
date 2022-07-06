import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <img src={user.picture || ''} alt={user.nickname || ''} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <button onClick={() => window.location.href = '/api/auth/logout'}>Logout</button>
      </div>
    )
  );
}