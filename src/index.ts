import express, { Request, Response } from "express";
import cors from "cors";
import { customAlphabet } from "nanoid/async";

const nanoid = customAlphabet(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8)
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (_req: Request, res: Response): void => {
    res.sendFile("public/index.html");
})

app.post("/api", async (_req: Request, res: Response): Promise<void> => {
    res.status(200);
    const ID = await nanoid();
    res.send({id: ID});
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
