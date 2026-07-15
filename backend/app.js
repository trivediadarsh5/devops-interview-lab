require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    app: "Node Backend",
    timestamp: new Date()
  });
});

app.get("/api/version", (req, res) => {
  res.json({
    version: "1.0.0"
  });
});

// Troubleshooting endpoints
app.get("/api/crash", (req, res) => {
  process.exit(1);
});

app.get("/api/slow", async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  res.json({ message: "Slow API Response" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});