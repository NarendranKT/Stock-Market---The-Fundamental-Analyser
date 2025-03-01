import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true,
    },
    sourceUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        required: true,
    }
},{
    timestamps: true
})

const News = mongoose.model('News', newsSchema);
// module.exports = News;

export default News;