import { db } from '@/db';
import {
  HomeIcon,
  MusicalNoteIcon,
  RadioIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { Geist } from 'next/font/google';
import { Suspense } from 'react';
import { NavLink } from './_components/NavLink';
import './globals.css';
import { Metadata, Viewport } from 'next';
// import { unstable_cacheTag as cacheTag } from 'next/cache';

export const metadata: Metadata = {
  title: 'Vercel Music',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  // themeColor: 'black',
};

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
        <nav className="w-[300px] p-4 mt-4 space-y-6">
          <section>
            <p className="text-xs font-semibold text-gray-400">Vercel Music</p>
            <div className="mt-1 flex flex-col gap-1">
              <NavLink href="/">
                <HomeIcon className="size-5 text-red-500" />
                Home
              </NavLink>
              <NavLink href="/new">
                <Squares2X2Icon className="size-5 text-red-500" />
                New
              </NavLink>
              <NavLink href="/radio">
                <RadioIcon className="size-5 text-red-500" />
                Radio
              </NavLink>
            </div>
          </section>

          <Suspense>
            <section>
              <p className="text-xs font-semibold text-gray-400">Playlists</p>
              <PlaylistNav />
            </section>
          </Suspense>
        </nav>

        <main className="p-8 w-full bg-white mt-4 rounded-tl-lg shadow">
          {children}
        </main>
      </body>
    </html>
  );
}

async function PlaylistNav() {
  // 'use cache';
  // cacheTag('playlist:all');

  const playlists = await db.query.playlists.findMany();
  await fetch('https://httpbin.org/delay/1');

  return (
    <div className="space-y-1 mt-1">
      {playlists.map((playlist) => (
        <NavLink key={playlist.id} href={`/playlists/${playlist.id}`}>
          <MusicalNoteIcon className="size-5 text-gray-500" />
          {playlist.name}
        </NavLink>
      ))}
    </div>
  );
}

{
  /* <Link
  href={`/playlists/${playlist.id}`}
  key={playlist.id}
  className="hover:bg-gray-200 block py-2 px-4 -mx-4"
>
  {playlist.name}
</Link>; */
}

export const dynamic = 'force-dynamic';
