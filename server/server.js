const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ name: "Meow" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED ON ${PORT}`);
});
