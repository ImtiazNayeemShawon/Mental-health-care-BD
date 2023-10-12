const express = require("express");
const app = express();
const cors = require("cors");

// routers
const blogsRoutes = require("./routes/blogs");
const eventsRoutes = require("./routes/events");
const applicationRoutes = require("./routes/application");
// middleware
app.use(express.json());
app.use(cors());

// use routes
app.use(blogsRoutes);
app.use(eventsRoutes);
app.use(applicationRoutes);

app.get("/", (_req, res) => {
  res.send("server is runnig");
});

// run app
app.listen(4000, () => {
  console.log("server is running");
});
