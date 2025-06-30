'use server';

import { db } from '@/db';
import { users } from '@/db/schema';
// import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  age: z.coerce.number(),
});

export async function createUser(formData: FormData) {
  const data = schema.parse(Object.fromEntries(formData));
  const [user] = await db.insert(users).values(data).returning();

  console.log(user);

  // redirect(`/`);
  // redirect(`/users/${user.id}`);
}
