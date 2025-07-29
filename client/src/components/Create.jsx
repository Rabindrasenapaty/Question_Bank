import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';



const Create = () => {
  const [postData, setpostData] = useState({})
  const navigate=useNavigate()
  const {postId}=useParams()
  const BACKEND_URL=import.meta.env.VITE_BACKEND_URL
  console.log(BACKEND_URL);
  
  const getPost = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/GetSinglePost?postId=${postId}`);
      const post=response.data.responseData;
      setpostData({
      heading: post.topic,
      question: post.question,
      description: post.answer,
    });
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  };
  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()  
      if (postId) {
        const response=await axios.put(`${BACKEND_URL}/UpdatePost`,{
          postId,
        topic:postData.heading,
        question:postData.question,
        answer:postData.description
      });
      if (response.data.success){
        navigate(`/singlepost/${postId}`)
      }
      }else{
        const response=await axios.post(`${BACKEND_URL}/createPost`,{
        topic:postData.heading,
        question:postData.question,
        answer:postData.description
      });
      if (response.data.success){
        navigate('/')
      }
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
    
    

  };

  
  const handleChange = (e) => {
      setpostData({ ...postData, [e.target.name]: e.target.value })

    }
  
  

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-100 shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-primary">Create Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text font-medium">Heading</span>
          </label>
          <input
            type="text"
            name="heading"
            placeholder="Enter heading"
            className="input input-bordered w-full"
            value={postData.heading || ''}
            
            onChange={handleChange}

            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Question</span>
          </label>
          <input
            type="text"
            placeholder="Enter your question"
            name="question"
            className="input input-bordered w-full"
            value={postData.question || ''}
            
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Add description"
            rows="5"
            name="description"
            value={postData.description || ''}
            
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          {postId?'Update Post':'Submit Post'}
        </button>
      </form>
    </div>
  );
};

export default Create;
