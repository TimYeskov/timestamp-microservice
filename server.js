import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8000;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(["/api", "/api/:date"], (req, res) => {
  const dateParam = req.params.date;
  const timestamp = Number(dateParam);
  const date = !dateParam
    ? new Date()
    : Number.isNaN(timestamp)
      ? new Date(dateParam)
      : new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
