
import { serial, text, pgTable, timestamp, boolean } from 'drizzle-orm/pg-core';

export const buttonsTable = pgTable('buttons', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  color: text('color').notNull(),
  enabled: boolean('enabled').notNull().default(true),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type Button = typeof buttonsTable.$inferSelect;
export type NewButton = typeof buttonsTable.$inferInsert;

// Export all tables for proper query building
export const tables = { buttons: buttonsTable };
