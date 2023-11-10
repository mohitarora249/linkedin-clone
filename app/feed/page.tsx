import React from "react";
import AccountInfo from "./(ui)/AccountInfo";
import CreatePostCard from "./(ui)/CreatePostCard";
import News from "./(ui)/News";
import PostInfo from "./(ui)/PostInfo";
import { Flex } from "antd";

const FeedPage = () => {
  return (
    <main className="grid grid-cols-4 gap-4">
      <AccountInfo />
      <div className="col-span-2">
        <CreatePostCard />
        <Flex gap={12} vertical>
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
        </Flex>
      </div>
      <div>
        <News />
      </div>
    </main>
  )
}

export default FeedPage;