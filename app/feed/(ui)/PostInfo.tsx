"use client";
import React from "react";
import { Card, Button, Flex, Avatar, Typography } from 'antd';
import { CommentOutlined, LikeOutlined, ShareAltOutlined, UserOutlined, CloseOutlined, EllipsisOutlined } from "@ant-design/icons";
const { Text } = Typography;

const PostInfo = () => {
    return (
        <Card
            className=""
            title={<UserInfo />}
            actions={[<ActionButtons />]}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            extra={<><Button shape="circle" type="text" icon={<EllipsisOutlined />} /><Button shape="circle" type="text" icon={<CloseOutlined />} /></>}
        >

        </Card>
    )
}

const UserInfo = () => {
    return (
        <Flex align="center" gap={8}>
            <Avatar shape="circle" size={36} icon={<UserOutlined />} />
            <Flex vertical gap={0}>
                <Text>Mohit Arora</Text>
                <Text type="secondary">Web Developer</Text>
                <Text type="secondary">1h</Text>
            </Flex>
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
