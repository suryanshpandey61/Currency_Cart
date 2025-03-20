import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", 
{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 100 }).notNull().unique(),
  password:varchar({ length: 50 }).notNull().unique() 
});
