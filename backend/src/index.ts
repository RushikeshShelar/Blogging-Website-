import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { initMiddleware } from './middleware';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

initMiddleware(app);

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


export default app;