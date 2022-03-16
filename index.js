const expree = require("express");
const app = expree();
const importData = require("./data.json");
let port = process.env.PORT || 5000;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/category", (req,res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app is listing on port http://localhost:${port}`);
});