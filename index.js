const expree = require("express");
const app = expree();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello word")
});

app.get("/category", (req,res) => {
    res.send(importData);
});

app.listen(port, () =>{
    console.log(`Example app is listing on port http://localhost:${port}`)
});