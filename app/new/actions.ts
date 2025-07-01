'use server';

import { db } from '@/db';
import { playlists } from '@/db/schema';
import { revalidateTag } from 'next/cache';
// import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
});

export async function createPlaylist(formData: FormData) {
  const data = schema.parse(Object.fromEntries(formData));
  const [playlist] = await db.insert(playlists).values(data).returning();

  console.log(playlist);

  revalidateTag('playlist:all');
  // revalidatePath('/new', 'layout');
  // redirect(`/`);
  // redirect(`/users/${user.id}`);
}
