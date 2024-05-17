// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./src/routers/auth");
// const productRouter = require("./routes/product");
// const userRouter = require("../main3/src/routers/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
// const DB =
//   "mongodb+srv://rivaan:rivaan123@cluster0.wpyhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);
// app.use(adminRouter);
// app.use(productRouter);
// app.use(userRouter);

// Connections
// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("Connection Successful");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// const collection = client.db("test").collection("devices");
mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb+srv://felo:felo2590@cluster0.a4pyhy8.mongodb.net/ccdb?retryWrites=true&w=majority',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to database ')
}).catch((err) => {
  console.error(`Error connecting to the database. \n${err}`);
});


// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`connected at port ${PORT}`);
// });
app.listen(process.env.port || 4000, function () {
  console.log('ready to go')
})
