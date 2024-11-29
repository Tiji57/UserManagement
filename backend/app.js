const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter.js');
const cors = require('cors'); // Corrected the import of 'cors'

const app = express();
const port = 3000; // You can change the port if needed


app.use(cors());
app.use(express.json());


// https://localhost:3000
app.get('/', (req, res) => {
  res.send("From the server");
});

// https://localhost:3000/users
app.use('/users', userRouter);

// Connection to Database
main()
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tijimolgeorge7543:j28egOc6mmoDrRn9@cluster0.jwwi9.mongodb.net/MAINPROJECTDB');
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
