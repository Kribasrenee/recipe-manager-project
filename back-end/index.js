const dotenv=require('dotenv');

dotenv.config(); //this will load the .env file and make the variables available in process.env otherwise it will run in the port specified in the const port variable
const connectDB=require('./src/config/db.Config');
const app=require('./src/app');
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("🏃‍➡️ server is running on port " + PORT);
});