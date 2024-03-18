import express from 'express';
import "dotenv/config"

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res)=> {
    res.send("hello world with node.js")
})
app.listen(port, () => {
    console.log("Node.js server is running on the port: "+port);
})