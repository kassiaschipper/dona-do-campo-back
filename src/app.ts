import express, { Express } from 'express';
import { loadEnv } from './config/envs.js';
import { connectDb, disconnectDb } from './config/database.js';
import cors from 'cors';
// import { registrationRouter } from './routers/registration-router.js';
import { userRouter } from './routers/user-router.js';
import { authenticationRouter } from './routers/authentication-router.js';
import { newsRouter } from './routers/news-router.js';

loadEnv();

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/status", (_req, res) => res.send("ok"))
    .use("/user", userRouter)
    .use("/auth", authenticationRouter)
    .use("/news", newsRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}
  
export async function close(): Promise<void> {
  await disconnectDb();
}
  
export default app;