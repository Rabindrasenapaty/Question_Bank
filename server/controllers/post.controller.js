import PostModel from "../model/post.model.js"

const CreatePost=async (req,res,next)=>{
    const {topic,question,answer}=req.body;
    // console.log(req.body);
    const Responsedata=await PostModel.create({
        topic,question,answer
    })
    res.send({
        success:true,
        Responsedata
    })
}


const GetAllPost=async (req,res,next)=>{
    const responseData=await PostModel.find()
    res.send({
        success:true,
        responseData
    })
}


const GetSinglePost=async (req,res,next)=>{
    const {postId}=req.query
    const responseData=await PostModel.findById(postId)
    res.send({
        success:true,
        responseData
    })
}

const DeletePost=async (req,res,next)=>{
    const {postId}=req.body
    if (!postId) {
      return res.status(400).json({ success: false, message: "postId is required" });
    }
     const responseData = await PostModel.findByIdAndDelete(postId);

    if (!responseData) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.send({
        success:true,
        message: "Post deleted successfully",
        responseData
    })
}

const UpdatePost=async (req,res,next)=>{
    const {postId,topic,question,answer}=req.body
    const responseData=await PostModel.findByIdAndUpdate(postId,{
        topic,
        question,
        answer
    },{new:true})
    res.send({
        success:true,
        responseData
    })
}



export {CreatePost,GetAllPost,GetSinglePost,DeletePost,UpdatePost}