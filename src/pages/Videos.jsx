import { useQuery } from "@tanstack/react-query";
import React from "react";
import VideoCard from "../components/VideoCard";
import { useParams } from "react-router-dom";
import { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>{keyword ? keyword : "Hot Trend"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
