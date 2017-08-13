const express = require('express');

const app = express();

let port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Please visit IrvineCode.com");
})

app.listen(port, function () {
    console.log("Server has started at port " + port);
});