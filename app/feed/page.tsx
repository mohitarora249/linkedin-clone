import React from "react";
import AccountInfo from "./(ui)/AccountInfo";
import CreatePostCard from "./(ui)/CreatePostCard";
import PostInfo from "./(ui)/PostInfo";
import { Flex } from "antd";
import OtherInfo from "../(ui)/OtherInfo";
import News from "./(ui)/News";

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
        <Flex vertical gap={8}>
          <News />
          <OtherInfo />
        </Flex>
      </section>
    </main>
  )
}

export default FeedPage;