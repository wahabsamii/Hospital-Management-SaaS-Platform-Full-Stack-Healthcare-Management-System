import mongoose from "mongoose";

const connectDB = async () => {
    const dbString = 'mongodb+srv://aftabkhan48491:aftabkhan945@cluster0.qdqvxeg.mongodb.net/Prescripto?retryWrites=true&w=majority&appName=Cluster0'

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${dbString}/prescripto`)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.