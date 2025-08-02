const express = require("express");
const app = express();
app.use(express.json());

const urlRoute = require("./routes/url");
app.use("/api/url", urlRoute);
app.use("/", urlRoute);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`),
);
