import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const playlists = pgTable('playlists', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});
