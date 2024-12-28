const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;


app.use(cors()); 
app.use(bodyParser.json()); 


connectDB();

// Routes
app.use("/api/auth", authRoutes); 
app.use("/api/todos", todoRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
