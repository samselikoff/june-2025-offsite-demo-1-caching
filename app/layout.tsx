import { db } from '@/db';
import { PlusIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import './globals.css';
import { Suspense } from 'react';
import Spinner from './_comonents/spinner';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log('Rendering root layout');

  return (
    <html lang="en">
      <body className="antialiased flex min-h-dvh  bg-gray-100">
        <nav className="w-[300px] p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold">
              Users App
            </Link>
            <Link
              href="/new"
              className="flex items-center justify-center size-6 bg-blue-500 leading-none text-white rounded text-xl"
            >
              <PlusIcon className="size-4" />
            </Link>
          </div>
          <div className="mt-4">
            <Suspense fallback={<Spinner />}>
              <UsersList />
            </Suspense>
          </div>
        </nav>
        <main className="p-8 w-full bg-white m-4 rounded-lg shadow">
          {children}
        </main>
      </body>
    </html>
  );
}

async function UsersList() {
  // console.log(Date.now());
  console.log('hitting Neon');
  const users = await db.query.users.findMany();
  await new Promise((resolve) => setTimeout(resolve, 2_000));

  return (
    <>
      {users.map((user) => (
        <Link
          href={`/users/${user.id}`}
          key={user.id}
          className="hover:bg-gray-200 block py-2 px-4 -mx-4"
        >
          {user.name}
        </Link>
      ))}
    </>
  );
}
