import React from "react";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  const youtubes = [
    {
      id: 1,
      background:
        "https://images.unsplash.com/photo-1643991079578-cd4e5e7b0da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      avatar:
        "https://images.unsplash.com/photo-1644108598258-544af2000cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      author: "tu",
    },
    {
      id: 2,
      background:
        "https://images.unsplash.com/photo-1640622660721-45b83554ab05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      avatar:
        "https://images.unsplash.com/photo-1644108598258-544af2000cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      author: "tu1",
    },
  ];
  return (
    <div className="youtube-list">
      {youtubes.map((item, index) => (
        <YoutubeItem
          key={item.id}
          background={item.background}
          avatar={
            item.avatar ||
            "https://images.unsplash.com/photo-1643991079578-cd4e5e7b0da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          author={item.author}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
