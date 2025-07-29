import React from 'react';
import { useNavigate } from 'react-router-dom';

const Show = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
      <div
        className="card-body cursor-pointer"
        onClick={() => navigate(`/singlepost/${post._id}`)}
      >
        <h3 className="card-title text-xl text-primary">{post?.topic}</h3>
        <p className="font-semibold">{post?.question}</p>

        {/* Clamp to 3 lines */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {post?.answer}
        </p>
      </div>
    </div>
  );
};

export default Show;
