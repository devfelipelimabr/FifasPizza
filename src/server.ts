import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from 'cors'
import path from "path";

import { router } from "./routes";

const port = 3333;

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'imgs'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //Se for uma instância do tipo error
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
});

app.listen(port, () => console.log(`Servidor conectado na porta ${port}`));
