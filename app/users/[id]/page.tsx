import { db } from '@/db';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // await new Promise((resolve) => setTimeout(resolve, 2_000));
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, +id),
  });

  if (!user) {
    notFound();
  }

  return (
    <div>
      <p className="text-3xl">{user.name}</p>
    </div>
  );
}
