import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './utils/env';

(async() => {
  const app = express();

  app.use(helmet());
  app.use(cors());

  app.get("/", (_, res) => {
    return res.json({
      success: true,
      message: "Hello from backend!"
    })
  });

  app.listen(env.PORT, () => {
    console.info(`Backend started at port: ${env.PORT} in ${env.NODE_ENV} mode`);
  });
})();