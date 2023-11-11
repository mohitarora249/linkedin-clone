import React from "react";
import AccountInfo from "./(ui)/AccountInfo";
import CreatePostCard from "./(ui)/CreatePostCard";
import News from "./(ui)/News";
import PostInfo from "./(ui)/PostInfo";
import { Flex } from "antd";

const FeedPage = () => {
  return (
    <main className="grid grid-cols-4 gap-4">
      <section>
        <AccountInfo />
      </section>
      <section className="col-span-2">
        <Flex gap={12} vertical>
          <CreatePostCard />
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
        </Flex>
      </section>
      <section>
        <News />
      </section>
    </main>
  )
}

export default FeedPage;