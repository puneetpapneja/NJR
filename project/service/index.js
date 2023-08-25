const express = require("express");
<<<<<<< HEAD
const {port} = require("./config.js");
const db=require("./database.js");
const app = express();
app.use(express.json());
app.get("/health",(req,res)=>{
    res.send({status:"ok"});
})
const port=5000;
app.listen(port,()=> Console.log("service started on port:",port));
=======
const { port } = require("./config");
const db = require("./database");
const userRoute = require("./routes/userRoute");
const jobRoute = require("./routes/jobroutes"); 
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/job", jobRoute); 

app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(port, () => console.log("service started on port: ", port));
>>>>>>> d8595ad42d20a4349d702758e3b0ae85f4b55dab
