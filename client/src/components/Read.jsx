import React, { useEffect, useState } from 'react';
import Show from './Show';
import axios from 'axios';

const Read = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getallpost`);
      setPosts(response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">All Posts</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Show key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Read;
