import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const getPost = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/GetSinglePost?postId=${postId}`);
      setPost(response.data.responseData);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  };

  const DeletePost = async () => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/DeletePost`, {
        data: { postId }
      });
      if (response.data.responseData) {
        navigate('/');
      }
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white px-8 py-6">
          <h1 className="text-3xl font-bold">{post?.topic}</h1>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">

          {/* Question Card */}
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
            <div className="mb-2 inline-block px-3 py-1 text-sm font-semibold bg-yellow-200 text-yellow-800 rounded-full">
              Question
            </div>
            <p className="text-gray-700 font-medium">{post?.question}</p>
          </div>

          {/* Answer Card */}
          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg">
            <div className="mb-2 inline-block px-3 py-1 text-sm font-semibold bg-green-200 text-green-800 rounded-full">
              Answer
            </div>
            <p className="text-gray-700">{post?.answer}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              onClick={DeletePost}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-200"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/UpdatePost/${postId}`)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-200"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
