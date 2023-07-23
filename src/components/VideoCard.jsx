import React from "react";
import { formatAgo } from "../utils/data";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="my-2 font-semibol line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
};

export default VideoCard;
