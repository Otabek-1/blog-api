const express = require("express");
require("dotenv").config();
const app = express();
const blogRoutes = require("./routes/blogRoutes");

app.use(express.json());

app.use("/", blogRoutes);

// 404 uchun
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>console.log(`Server listening on http://localhost:${PORT}`));