const mongoose = require("mongoose");
var colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit();
  }
};

module.exports = connectDB;
