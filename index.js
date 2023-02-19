const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DB =
    "mongodb+srv://Yoonhee:0407xoxKyh@comp3123-assignment1.6vngmmc.mongodb.net/assignment1";
mongoose.set("strictQuery", true); // for suppressing the deprecation warning
mongoose.connect(DB).then(() => {
    console.log("DB has been successfully connected");
});

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}..`);
});
