import React from "react";
import { Card, Button, Flex, Avatar } from 'antd';
import { CommentOutlined, LikeOutlined, ShareAltOutlined, UserOutlined } from "@ant-design/icons";

const PostInfo = () => {
    return (
        <Card className="" title={<UserInfo />} actions={[<ActionButtons />]} cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }>

        </Card>
    )
}

const UserInfo = () => {
    return (
        <Flex gap="small">
            <Avatar shape="circle" size={36} icon={<UserOutlined />} />
        </Flex>
    )
}

const ActionButtons = () => {
    return (
        <Flex gap="small" wrap="wrap" className="mt-2" justify="space-around">
            <Button type="text" size="large" icon={<LikeOutlined />}>Like</Button>
            <Button type="text" size="large" icon={<CommentOutlined />}>Comment</Button>
            <Button type="text" size="large" icon={<ShareAltOutlined />}>Repost</Button>
            <Button type="text" size="large" icon={<ShareAltOutlined />}>Share</Button>
        </Flex>
    )
}

export default PostInfo;