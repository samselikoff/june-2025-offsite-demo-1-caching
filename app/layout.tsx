import { db } from '@/db';
import './globals.css';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/16/solid';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const users = await db.query.users.findMany();

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
            {users.map((user) => (
              <Link
                href={`/users/${user.id}`}
                key={user.id}
                className="hover:bg-gray-200 block py-2 px-4 -mx-4"
              >
                {user.name}
              </Link>
            ))}
          </div>
        </nav>

        <main className="p-8 w-full bg-white m-4 rounded-lg shadow">
          {children}
        </main>
      </body>
    </html>
  );
}
