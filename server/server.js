const express = require("express");
const app = express();

// const router = require("./routes/routes");
const userRoute = require("./routes/user");
const rotaRoute = require("./routes/rota");

app.use("/user", userRoute);
app.use("/rota", rotaRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED ON ${PORT}`);
});
