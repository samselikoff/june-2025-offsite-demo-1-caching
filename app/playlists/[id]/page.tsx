/*
  ❌ V1

  Doesn't show loading tepmlate when navigating from /playlists/1 to /playlists/2.
*/
import { db } from '@/db';
import { notFound } from 'next/navigation';
import { Poster } from '../../_components/Poster';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const playlist = await db.query.playlists.findFirst({
    where: (t, { eq }) => eq(t.id, +id),
  });
  await fetch('https://httpbin.org/delay/1');

  if (!playlist) {
    notFound();
  }

  return (
    <div>
      <div className="mt-4 flex items-center gap-6">
        <div className="max-w-[300px] w-full">
          <Poster title={playlist.name} color={'#fb2c36'} />
        </div>
        <p className="text-3xl font-semibold">{playlist.name}</p>
      </div>
    </div>
  );
}

/*

  ✅ V2
  
  Shows loading tepmlate when navigating from /playlists/1 to /playlists/2.
*/

// import Spinner from '@/app/_components/spinner';
// import { db } from '@/db';
// import { notFound } from 'next/navigation';
// import { Suspense } from 'react';
// import { PlaylistPoster } from './PlaylistPoster';

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   return (
//     <div>
//       <div className="mt-4">
//         <Suspense
//           fallback={
//             <div className="w-full flex justify-center items-center h-full">
//               <Spinner className="size-6" />
//             </div>
//           }
//         >
//           <PlaylistDetails params={params} />
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// async function PlaylistDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   // await new Promise((resolve) => setTimeout(resolve, 2_000));
//   const playlist = await db.query.playlists.findFirst({
//     where: (t, { eq }) => eq(t.id, +id),
//   });
//   await fetch('https://httpbin.org/delay/1');

//   if (!playlist) {
//     notFound();
//   }

//   return (
//     <div>
//       <div className="mt-4 flex items-center gap-6">
//         <div className="max-w-[300px] w-full">
//           <PlaylistPoster title={playlist.name} color={'#fb2c36'} />
//         </div>
//         <p className="text-3xl font-semibold">{playlist.name}</p>
//       </div>
//     </div>
//   );
// }
