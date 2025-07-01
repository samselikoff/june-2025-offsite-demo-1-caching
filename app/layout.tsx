import { db } from '@/db';
import {
  HomeIcon,
  Squares2X2Icon,
  RadioIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import './globals.css';
import { Suspense } from 'react';
import { Geist } from 'next/font/google';
import { unstable_cacheTag as cacheTag } from 'next/cache';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)] flex min-h-dvh bg-gray-100`}
      >
        <Suspense fallback={<p>Initial loader...</p>}>
          <nav className="w-[300px] p-4 mt-4 space-y-6">
            <section>
              <p className="text-xs font-semibold text-gray-400">
                Vercel Music
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/"
                  className="flex items-center font-medium text-sm gap-1.5"
                >
                  <HomeIcon className="size-5 text-red-500" />
                  Home
                </Link>
                <Link
                  href="/new"
                  className="flex items-center font-medium text-sm gap-1.5"
                >
                  <Squares2X2Icon className="size-5 text-red-500" />
                  New
                </Link>
                <Link
                  href="/"
                  className="flex items-center font-medium text-sm gap-1.5"
                >
                  <RadioIcon className="size-5 text-red-500" />
                  Radio
                </Link>
              </div>
            </section>

            <section>
              <p className="text-xs font-semibold text-gray-400">Library</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/"
                  className="flex items-center font-medium text-sm gap-1.5"
                >
                  <RadioIcon className="size-5 text-red-500" />
                  Artists
                </Link>
                <Link
                  href="/"
                  className="flex items-center font-medium text-sm gap-1.5"
                >
                  <RadioIcon className="size-5 text-red-500" />
                  Albums
                </Link>
                <Link
                  href="/"
                  className="flex items-center font-medium text-sm gap-1.5"
                >
                  <RadioIcon className="size-5 text-red-500" />
                  Songs
                </Link>
              </div>
            </section>

            <section>
              <p className="text-xs font-semibold text-gray-400">Playlists</p>
              <PlaylistNav />
            </section>
          </nav>

          <main className="p-8 w-full bg-white m-4 rounded-lg shadow">
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  );
}

async function PlaylistNav() {
  'use cache';
  cacheTag('playlist:all');

  const playlists = await db.query.playlists.findMany();

  return (
    <>
      {playlists.map((playlist) => (
        <Link
          href={`/users/${playlist.id}`}
          key={playlist.id}
          className="hover:bg-gray-200 block py-2 px-4 -mx-4"
        >
          {playlist.name}
        </Link>
      ))}
    </>
  );
}
