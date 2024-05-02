import mongoose from 'mongoose';

// connectionUrl = 'mongodb://127.0.0.1:27017/market_nif';

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/market_nif');
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

dbConnect();

export default dbConnect;