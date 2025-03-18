import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", 
{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 20 }).notNull(),
  email: varchar({ length: 30 }).notNull().unique(),
  password:varchar({ length: 20 }).notNull().unique() 
});
