
import dotenv from "dotenv"
import { defineConfig } from 'drizzle-kit';

dotenv.config();

// checking for fetching the url
// console.log(process.env.DATABASE_URL);

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
