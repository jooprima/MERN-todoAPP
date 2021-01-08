import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("hello joo");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("This is about route ");
});

app.listen(PORT, () => {
  console.info(`App is listening at http://localhost:${PORT}`);
});
