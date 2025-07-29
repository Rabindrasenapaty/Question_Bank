import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    topic:{
        type:String,
        required:"topic is required"
    },
    question:{
        type:String,
        required:"question is required"
    },
    answer:{
        type:String,
        required:"answer is required"
    }
})
const PostModel=mongoose.model('PostModel',postSchema)
export default PostModel
