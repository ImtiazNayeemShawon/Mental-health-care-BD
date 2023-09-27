const express = require("express");
const app = express();
const cors = require("cors");

// routers
const postRouters = require("./routes/posts");
const eventsRoutes = require("./routes/events");
const applicationRoutes = require("./routes/application");
// middleware
app.use(express.json());
app.use(cors());

// use routes
app.use(postRouters);
app.use(eventsRoutes);
app.use(applicationRoutes);

// run app
app.listen(4000, () => {
  console.log("server is running");
});
