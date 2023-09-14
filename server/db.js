const mongoose = require("mongoose");
const colors = require("colors");

const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGODB_URI)
const dbConnect = async () => {
  try {
    const connectionString = await mongoose.connect(`mongodb+srv://internattier1:${process.env.MONGODB_URI}@cluster0.j0yfbal.mongodb.net/?retryWrites=true&w=majority`, {
      useUnifiedTopology: true, 
      useNewUrlParser: true,
    });
    console.log(
      colors.brightMagenta(
        `\nDB connected: ${connectionString.connection.host}\n`
      )
    );
  } catch (error) {
    console.log(colors.brightRed("\nConnection to link DB failed\n"));
  }
};

module.exports = dbConnect;
