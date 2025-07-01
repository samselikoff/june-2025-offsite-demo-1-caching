import Spinner from '@/app/_components/spinner';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <p>User details</p>

      <div className="mt-4">
        <Suspense fallback={<Spinner />}>
          <UserDetails params={params} />
        </Suspense>
      </div>
    </div>
  );
}

async function UserDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // await new Promise((resolve) => setTimeout(resolve, 2_000));

  const user = await db.query.playlists.findFirst({
    where: (t, { eq }) => eq(t.id, +id),
  });

  if (!user) {
    notFound();
  }
  return <p className="text-3xl">{user.name}</p>;
}
